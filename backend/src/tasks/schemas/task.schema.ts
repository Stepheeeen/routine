import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  cron: string;

  @Prop({ required: true })
  isRecurring: boolean;

  @Prop({ type: Date, required: true })
  nextRun: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
