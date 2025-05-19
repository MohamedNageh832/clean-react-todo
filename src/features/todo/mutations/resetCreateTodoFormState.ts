import { deepClone } from "@/shared/utils";
import { initialCreateTodoFormState, todoState } from "../store";

// TODO: consider better naming to eliminate verbosity
export const resetCreateTodoFormState = () => {
  Object.assign(
    todoState.createTodoFormState,
    deepClone(initialCreateTodoFormState)
  );
};
