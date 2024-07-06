export class CreateTaskDto {
    readonly name: string;
    readonly cron: string;
    readonly isRecurring: boolean;
    readonly nextRun: Date;
  }
  