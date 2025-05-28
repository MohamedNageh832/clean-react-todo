import { createInitialCreateFormState, todoState } from "../store";

export const resetCreateForm = () => {
  todoState.createForm = createInitialCreateFormState();
};
