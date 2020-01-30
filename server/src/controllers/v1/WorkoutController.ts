import { Router, Request, Response, NextFunction, json } from 'express';
import * as VError from 'verror';
import axios from 'axios';
import { WorkoutService } from '../../services';
import Logger from '../../Logger';
import BaseController from '../BaseController';
import config from '../../config';
import WorkoutModel, { Workout } from '../../models/WorkoutModel';
import { type } from 'os';

const logger = new Logger();

class WorkoutController extends BaseController {
  public init(): void {
    this.router.get('/all', this.getAll);
    this.router.post('/add', this.add);
    this.router.post('/delete', this.delete)
  }

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    logger.info('workoutController index route entered');

    try {
      const workouts = await WorkoutService.getAll();

      return res.json({ workouts });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async add(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    logger.info('workoutController add route entered');
    try {
      const data = req.body;

      const workout = await WorkoutService.add(data);

      return res.json({ workout });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    logger.info('workoutController remove route entered');
    try {
      const data = req.body;

      const workout = await WorkoutService.delete(data);

      return res.json({ workout });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }
}

export default WorkoutController;
