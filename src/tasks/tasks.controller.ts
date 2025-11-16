import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/ create-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() body: CreateTaskDto) {
    return this.tasksService.create(body.title);
  }

  @Patch(':id')
  Toggle(@Param('id') id: number) {
    return this.tasksService.toggleDone(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tasksService.delete(id);
  }
}
