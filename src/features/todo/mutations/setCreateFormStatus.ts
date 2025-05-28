import { FetchStatus } from "@/shared/types";
import { todoState } from "../store";
import { CreateTodoInput } from "../validation";

export const setCreateFormStatus = (
  status: FetchStatus,
  errors?: Partial<Record<keyof CreateTodoInput, string>>
) => {
  todoState.createForm.status = status;

  if (status === "error" && errors) todoState.createForm.errors = errors;
  else todoState.createForm.errors = {};
};
