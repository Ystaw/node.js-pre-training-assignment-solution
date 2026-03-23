// NestJS DTO class for 

export class ToDoDto {
  // TODO: implement fields: id, title, completed
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, completed: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
} 