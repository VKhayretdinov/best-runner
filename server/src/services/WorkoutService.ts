import WorkoutModel, { Workout } from '../models/WorkoutModel';
import UserModel from '../models/UserModel';

class WorkoutService {
  public static async create(userId: string, workout: Workout): Promise<Workout | null> {
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { workouts: workout } },
      { new: true })
      .lean();

    return updatedUser ? updatedUser.workouts : null;
  }

  public static async delete(userId, workoutId): Promise<Workout> {
    return WorkoutModel.findByIdAndUpdate(
      userId,
      { $pull: { workouts: { _id: workoutId } } },
    );
  }

  public static async update(userId: string, workout: Workout): Promise<Workout> {
    return WorkoutModel.findOneAndUpdate(
      { _id: userId, 'workouts._id': workout._id },
      { $set: {
        'workouts.$.date': workout.date,
        'workouts.$.type': workout.type,
        'workouts.$.distance': workout.distance,
        'workouts.$.comment': workout.comment,
      },
      },
      );
  }

  public static async getAll(userId): Promise<Workout[]> {
    return WorkoutModel
      .findById(userId)
      .select({ workouts: true })
      .lean();
  }
}

export default WorkoutService;
