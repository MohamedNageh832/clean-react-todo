import { SafeParseReturnType, z } from "zod";

const todoSchema = z.object({
  id: z.string().length(26),
  title: z.string(),
  describtion: z.string(),
  createdAt: z.string().date(),
  updatedAt: z.string().date(),
});

const createTodoInput = todoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
const updateTodoInput = createTodoInput.partial();

type Todo = z.infer<typeof todoSchema>;
type CreateTodoInput = z.infer<typeof createTodoInput>;
type UpdateTodoInput = z.infer<typeof updateTodoInput>;

const validateTodo = (todo: unknown): SafeParseReturnType<unknown, Todo> => {
  return todoSchema.safeParse(todo);
};

// TODO: consider better naming
const validateCreateTodo = (
  input: unknown
): SafeParseReturnType<unknown, CreateTodoInput> => {
  return createTodoInput.safeParse(input);
};

// TODO: consider better naming
const validateUpdateTodo = (
  input: unknown
): SafeParseReturnType<unknown, UpdateTodoInput> => {
  return updateTodoInput.safeParse(input);
};

export { todoSchema, validateTodo, validateCreateTodo, validateUpdateTodo };
export type { Todo, CreateTodoInput, UpdateTodoInput };
