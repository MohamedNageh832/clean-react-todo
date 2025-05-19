import { ulid } from "ulidx";
import { todoRepository } from "../../repository";
import { CreateTodoInput, Todo, validateCreateTodo } from "../../validation";

export const createTodo = async (newTodo: CreateTodoInput) => {
  const validation = validateCreateTodo(newTodo);

  if (!validation.success) {
    return { success: false, errors: validation.error };
  }

  const data: Todo = {
    ...newTodo,
    id: ulid(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const id = await todoRepository.add(data);

  return { success: true, id };
};
