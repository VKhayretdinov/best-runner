import { Typegoose, prop } from 'typegoose';
import * as mongoose from 'mongoose';

export class Workout extends Typegoose {
  public id: mongoose.Types.ObjectId;

  @prop({ required: true })
  public date: string;

  @prop({ required:true })
  public type: string;

  @prop({ required: true })
  public distance: number;

  @prop()
  public comment?: string;
}

const WorkoutModel = new Workout().getModelForClass(Workout);

export default WorkoutModel;
