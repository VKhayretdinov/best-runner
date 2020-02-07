import WorkoutModel, { Workout } from '../models/WorkoutModel';
import UserModel from '../models/UserModel';
import * as mongoose from 'mongoose';

class WorkoutService {
  public static async getAll(userId): Promise<Workout[]> {
    const workoutTrainings =  await UserModel
      .findById(userId)
      .select({ workouts: true })
      .lean();

    return workoutTrainings.workouts;
  }

  public static async create(userId: string, workout: Workout): Promise<Workout | null> {
    workout.id = new mongoose.mongo.ObjectId();

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { workouts: workout } },
      { new: true })
      .lean();

    return updatedUser.workouts.pop();
  }

  public static async delete(userId, workoutId): Promise<Workout> {
    return WorkoutModel.findByIdAndUpdate(
      userId,
      { $pull: { workouts: { id: workoutId } } },
    );
  }

  public static async update(userId: string, workout: Workout): Promise<Workout> {
    return WorkoutModel.findOneAndUpdate(
      { _id: userId, 'workouts.id': workout.id },
      { $set: {
        'workouts.$.date': workout.date,
        'workouts.$.type': workout.type,
        'workouts.$.distance': workout.distance,
        'workouts.$.comment': workout.comment,
      },
      },
      );
  }
}

export default WorkoutService;
