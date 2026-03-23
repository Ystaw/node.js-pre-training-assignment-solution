// NestJS Service for ToDos
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export class TodosService {
  // TODO: implement todos storage and methods (getTodos, addTodo, markCompleted)
  todos: Todo[] = [];

  addTodo(title: string) {
    const newTodo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    }
    this.todos.push(newTodo);
  }

  getTodos() {
    return this.todos;
  }

  markCompleted(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = true;
    }
  }
} 