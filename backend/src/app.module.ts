import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { SchedulerModule } from './tasks/scheduler/scheduler.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/taskdb'),
    TasksModule,
    SchedulerModule,
  ],
})
export class AppModule {}
