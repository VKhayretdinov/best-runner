import { Typegoose, prop } from 'typegoose';
import * as mongoose from 'mongoose';
import WorkoutModel, { Workout } from './WorkoutModel';

export class User extends Typegoose {
  public _id: mongoose.Types.ObjectId;

  @prop({ required: true })
  public email: string;

  @prop({ required: true })
  public password: string;

  @prop()
  public workouts?: Workout[];
}

const UserModel = new User().getModelForClass(User);

export default UserModel;
