import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  findAll() {
    return this.taskRepo.find();
  }

  async create(title: string) {
    const task = this.taskRepo.create({ title });
    return await this.taskRepo.save(task);
  }

  async toggleDone(id: number) {
    const task = await this.taskRepo.findOneBy({ id });
    if (!task) {
      throw new Error(`Task not found`);
    }
    task.isDone = !task.isDone;
    return await this.taskRepo.save(task);
  }

  async delete(id: number) {
    const result = await this.taskRepo.delete(id);
    if (result.affected === 0) {
      throw new Error(`Task not found`);
    }
  }
}
