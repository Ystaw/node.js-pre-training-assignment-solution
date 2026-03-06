import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  if (!state) {
    throw new Error("State not found");
  }

  return state.map(todo => ({
    ...todo,
    status: completed ? TodoStatus.COMPLETED : TodoStatus.PENDING
  }));
}

export function clearCompleted(state: Todo[]): Todo[] {
  if (!state) {
    throw new Error("State not found");
  }

  return state.filter(todo =>
    todo.status !== TodoStatus.COMPLETED)
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  if (!state) {
    throw new Error("State not found");
  }
  
  return state.filter(todo => todo.status === status).length;
}
