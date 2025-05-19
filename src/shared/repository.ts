import Dexie, { UpdateSpec } from "dexie";

export class Repository<T> {
  constructor(private table: Dexie.Table<T, string>) {}

  getAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    return this.table.limit(limit).offset(offset).toArray();
  }

  getById(id: string) {
    return this.table.get(id);
  }

  add(item: T) {
    return this.table.add(item);
  }

  update(id: string, changes: UpdateSpec<T>) {
    return this.table.update(id, changes);
  }
  delete(id: string) {
    return this.table.delete(id);
  }
}
