import { TodoService } from './todo-service';
import { TodoApi } from './todo-api';
import { Todo } from './types';

export class ToDoManager {
  private api = new TodoApi();
  private service = new TodoService(this.api);

  async init(): Promise<void> {
    await this.service.create('Init');
    await this.service.create('Init1');
  }

  async add(title: string, description = ''): Promise<void> {
    await this.service.create(title, description);
  }

  async complete(id: number): Promise<void> {
    await this.service.toggleStatus(id);
  }

  async list(): Promise<Todo[]> {
    return this.api.getAll();
  }
}
