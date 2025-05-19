import { proxy } from "valtio";
import { CreateTodoInput, Todo } from "./validation";
import { FetchStatus, FormState } from "@/shared/types";
import { deepClone } from "@/shared/utils";

type TodoState = {
  todos: Todo[];
  createTodoFormState: FormState<CreateTodoInput>;
  status: {
    createTodo: FetchStatus;
  };
  errors: Partial<Record<keyof TodoState["status"], string>>;
};

// TODO: consider better naming to eliminate verbosity
const initialCreateTodoFormState: FormState<CreateTodoInput> = {
  values: {
    title: "",
    describtion: "",
  },
  status: "idle",
  errors: {},
};

const initialState: TodoState = {
  todos: [],
  createTodoFormState: deepClone(initialCreateTodoFormState),
  status: {
    createTodo: "idle",
  },
  errors: {},
};

const todoState = proxy<TodoState>(deepClone(initialState));

export { initialCreateTodoFormState, initialState, todoState };
