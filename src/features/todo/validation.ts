import { validate } from "@/shared/utils";
import { z } from "zod";

const todoSchema = z.object({
  id: z.string().length(26),
  title: z.string(),
  description: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

const createTodoInputSchema = todoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
const updateTodoInputSchema = createTodoInputSchema.partial();

type Todo = z.infer<typeof todoSchema>;
type CreateTodoInput = z.infer<typeof createTodoInputSchema>;
type UpdateTodoInput = z.infer<typeof updateTodoInputSchema>;

const validateTodo = (todo: unknown) => validate(todoSchema, todo);
const validateCreateTodoInput = (input: unknown) => {
  return validate(createTodoInputSchema, input);
};
const validateUpdateTodoInput = (input: unknown) => {
  return validate(updateTodoInputSchema, input);
};

export {
  todoSchema,
  validateTodo,
  validateCreateTodoInput,
  validateUpdateTodoInput,
};
export type { Todo, CreateTodoInput, UpdateTodoInput };
