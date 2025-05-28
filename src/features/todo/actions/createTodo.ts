import { todoState } from "../store";
import { todoService } from "../services/todo-service";
import { resetCreateForm, setCreateFormStatus } from "../mutations";

export const createTodo = async () => {
  const { createForm } = todoState;
  const { values } = createForm;

  setCreateFormStatus("loading");

  const result = await todoService.createTodo(values);

  if (!result.success) setCreateFormStatus("error", result.errors);

  setCreateFormStatus("success");
  resetCreateForm();
};
