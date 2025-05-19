import { deepClone } from "@/shared/utils";
import { initialCreateTodoFormState, todoState } from "../store";

export const resetCreateTodoFormState = () => {
  Object.assign(
    todoState.createTodoFormState,
    deepClone(initialCreateTodoFormState)
  );
};
