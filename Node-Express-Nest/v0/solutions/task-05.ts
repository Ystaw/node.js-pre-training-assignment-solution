// NestJS Controller for /todos
import { Controller, Get } from '@nestjs/common';
import { TodosService } from './task-06';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) { };
  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }
} 