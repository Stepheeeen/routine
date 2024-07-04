import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutineModule } from './routine/routine.module';

@Module({
  imports: [RoutineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
