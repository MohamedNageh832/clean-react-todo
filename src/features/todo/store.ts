import { proxy } from "valtio";
import { CreateTodoInput, Todo } from "./validation";
import { FetchStatus, FormState } from "@/shared/types";

type TodoOperation = "createTodo" | "getTodos" | "updateTodo" | "deleteTodo";

type TodoState = {
  todos: Todo[];
  createForm: FormState<CreateTodoInput>;
  status: Record<TodoOperation, FetchStatus>;
  errors: Partial<Record<keyof TodoState["status"], string>>;
};

const createInitialCreateFormState = (): FormState<CreateTodoInput> => ({
  values: {
    title: "",
    description: "",
  },
  status: "idle",
  errors: {},
});

const createInitialState = (): TodoState => ({
  todos: [],
  createForm: createInitialCreateFormState(),
  status: {
    createTodo: "idle",
    getTodos: "idle",
    updateTodo: "idle",
    deleteTodo: "idle",
  },
  errors: {},
});

const todoState = proxy<TodoState>(createInitialState());

export { todoState, createInitialCreateFormState, createInitialState };
