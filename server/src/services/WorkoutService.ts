import WorkoutModel, { Workout } from '../models/WorkoutModel';

class WorkoutService {
  public static async add(workout): Promise<Workout> {
    return  WorkoutModel.create(workout);
  }

  public static async delete(workouts): Promise<Workout> {
    console.log(workouts)
    return WorkoutModel.deleteMany({ _id: { $in: workouts } });
  }

  public static async getAll(): Promise<Workout[]> {
    return WorkoutModel.find({}).exec();
  }
}

export default WorkoutService;
