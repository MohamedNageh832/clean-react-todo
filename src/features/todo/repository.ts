import { Repository } from "@/shared/repository";
import { Todo } from "./validation";
import { localDB } from "@/shared/config";

export class TodoRepository extends Repository<Todo> {
  constructor() {
    super(localDB.todos);
  }
}

export const todoRepository = new TodoRepository();
