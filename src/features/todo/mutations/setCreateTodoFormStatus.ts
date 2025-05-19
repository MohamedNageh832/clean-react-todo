import { FetchStatus } from "@/shared/types";
import { todoState } from "../store";
import { CreateTodoInput } from "../validation";

// TODO: consider better naming to eliminate verbosity
export const setCreateTodoFormStatus = (
  status: FetchStatus,
  errors?: Record<keyof CreateTodoInput, string>
) => {
  todoState.createTodoFormState.status = status;

  if (status === "error") {
    todoState.createTodoFormState.errors = errors;
  }
};
