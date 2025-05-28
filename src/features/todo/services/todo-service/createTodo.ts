import { ulid } from "ulidx";
import { todoRepository } from "../../repository";
import {
  CreateTodoInput,
  Todo,
  validateCreateTodoInput,
} from "../../validation";

export const createTodo = async (newTodo: CreateTodoInput) => {
  const validation = validateCreateTodoInput(newTodo);

  if (!validation.isValid) {
    return { success: false, errors: validation.errors };
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
