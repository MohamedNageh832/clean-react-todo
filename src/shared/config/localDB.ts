import { Todo } from "@/features/todo";
import { Dexie, Table } from "dexie";

const localDB = new Dexie("Todo app") as Dexie & {
  todos: Table<Todo, string>;
};

localDB.version(1).stores({
  todos: "id, title, description, createdAt, updatedAt",
});

export { localDB };
