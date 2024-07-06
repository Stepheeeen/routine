export class UpdateTaskDto {
    readonly name?: string;
    readonly cron?: string;
    readonly isRecurring?: boolean;
    readonly nextRun?: Date;
  }
  