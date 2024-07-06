import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TasksService } from '../tasks.service';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  constructor(private readonly tasksService: TasksService) {}

  @Cron(CronExpression.EVERY_SECOND)
  async handleCron() {
    const tasks = await this.tasksService.findAll();
    const now = new Date();

    tasks.forEach(task => {
      if (new Date(task.nextRun) <= now) {
        this.logger.debug(`Executing task: ${task.name}`);
        // Add your task execution logic here

        // Update next run for recurring tasks
        if (task.isRecurring) {
          task.nextRun = new Date(now.getTime() + 60000); // Example: set next run in 1 minute
          this.tasksService.update(task.id, task);
        } else {
          this.tasksService.remove(task.id);
        }
      }
    });
  }
}
