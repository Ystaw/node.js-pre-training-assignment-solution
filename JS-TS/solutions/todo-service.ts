import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';

export class TodoService {
  constructor(private readonly api: TodoApi) {
  }

  async create(title: string, description = ''): Promise<Todo> {
    if (!title) {
      throw new Error('Title is not found');
    }

    const newTodo = {
      title,
      description
    };

    return this.api.add(newTodo);
  }

  async toggleStatus(id: number): Promise<Todo> {
    if (!id) {
      throw new Error('id is not found');
    }

    const todos = await this.api.getAll();

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
      throw new Error('Todo is not found');
    }

    let newStatus: TodoStatus;

    switch (todo.status) {
      case TodoStatus.COMPLETED: {
        newStatus = TodoStatus.PENDING;
        break;
      }
      case TodoStatus.PENDING: {
        newStatus = TodoStatus.IN_PROGRESS;
        break;
      }
      case TodoStatus.IN_PROGRESS: {
        newStatus = TodoStatus.COMPLETED;
        break;
      }
    }

    return this.api.update(id, { status: newStatus });
  }

  async search(keyword: string): Promise<Todo[]> {
    if (!keyword) {
      throw new Error('Keyword is not found');
    }

    const lowKeyword = keyword.toLocaleLowerCase();

    const todos = await this.api.getAll();

    return todos.filter(todo => todo.title.toLocaleLowerCase().includes(lowKeyword) || todo.description?.toLocaleLowerCase().includes(lowKeyword));
  }
}
