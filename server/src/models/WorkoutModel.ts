import { Typegoose, prop } from 'typegoose';

export class Workout extends Typegoose {
  public id: string;

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
