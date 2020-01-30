import { Typegoose, prop } from 'typegoose';
import * as mongoose from 'mongoose';

export class Workout extends Typegoose {
  public _id: mongoose.Types.ObjectId;

  @prop({ required: true })
  public date: string;

  @prop({ required:true })
  public type: string;

  @prop({ required: true })
  public distance: number;
}

const WorkoutModel = new Workout().getModelForClass(Workout);

export default WorkoutModel;
