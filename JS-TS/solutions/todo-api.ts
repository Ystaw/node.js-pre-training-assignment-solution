import { InMemoryRepository } from './repository';
import { createTodo } from './todo-factory';
import { Todo, NewTodo } from './types';

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  private async simulateDelay() {
    const delay = Math.random() * 300 + 300;
    await new Promise(r => setTimeout(r, delay));
  }

  async getAll(): Promise<Todo[]> {
    await this.simulateDelay();
    return this.repo.findAll();
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    const todo = createTodo(newTodo);

    await this.simulateDelay();

    return this.repo.add(todo);
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    const todo = this.repo.findById(id);

    if (!todo) {
      throw new TodoNotFoundError(id);
    }

    await this.simulateDelay();

    return this.repo.update(id, update);
  }

  async remove(id: number): Promise<void> {
    const todo = this.repo.findById(id);

    if (!todo) {
      throw new TodoNotFoundError(id);
    }

    await this.simulateDelay();

    this.repo.remove(id);
  }
}

export class TodoNotFoundError extends Error {
  constructor(id: number) {
    super(`Todo with id ${id} not found`);
    this.name = "TodoNotFoundError";
  }
}
