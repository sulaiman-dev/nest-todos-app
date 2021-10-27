import { Controller, Get, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Prisma } from '@prisma/client';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // notice the Prisma type that was created: Prisma.TodoCreateInput
  @Post()
  create(@Body() todo: Prisma.TodoCreateInput) {
    return this.todosService.create(todo);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  // again, Prisma has generated a useful type for us to describe the shape of our update data
  @Put(':id')
  update(@Param('id') id: string, @Body() todo: Prisma.TodoUpdateInput) {
    return this.todosService.update(+id, todo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
