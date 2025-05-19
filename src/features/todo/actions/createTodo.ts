import { todoState } from "../store";
import { todoService } from "../services/todo-service";
import { setCreateTodoFormStatus } from "../mutations/setCreateTodoFormStatus";
import { resetCreateTodoFormState } from "../mutations";

// TODO: consider the naming convention (create vs add) centeralize error types (a common validation util maybe)
export const createTodo = async () => {
  const { createTodoFormState } = todoState;
  const { values } = createTodoFormState;

  setCreateTodoFormStatus("loading");

  const result = await todoService.createTodo(values);

  if (!result.success) setCreateTodoFormStatus("error", result.errors);

  setCreateTodoFormStatus("success");
  resetCreateTodoFormState();
};
