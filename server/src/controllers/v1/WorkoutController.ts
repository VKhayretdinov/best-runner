import { Router, Request, Response, NextFunction, json } from 'express';
import * as VError from 'verror';
import axios from 'axios';
import { WorkoutService } from '../../services';
import Logger from '../../Logger';
import BaseController from '../BaseController';
import config from '../../config';
import WorkoutModel, { Workout } from '../../models/WorkoutModel';
import { type } from 'os';
import Passport from '../../middlewares/Passport';

const logger = new Logger();

class WorkoutController extends BaseController {
  public init(): void {
    this.router.get('/all', Passport.authenticate('jwt', { session: false }), this.getAll);
    this.router.post('/create', Passport.authenticate('jwt', { session: false }), this.create);
    this.router.post('/delete', Passport.authenticate('jwt', { session: false }), this.delete);
    this.router.post('/update', Passport.authenticate('jwt', { session: false }), this.update);
  }

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    logger.info('workoutController index route entered');

    try {
      const user = req.user;

      const workouts: Workout[] = await WorkoutService.getAll(user._id);

      return res.json({ workouts });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    logger.info('workoutController add route entered');
    try {

      const workout = await WorkoutService.create(req.user._id, req.body);

      return res.json({ workout });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    logger.info('workoutController remove route entered');
    try {
      let { workoutId } = req.body;

      const updatedUser = await WorkoutService.delete(req.user._id, workoutId);

      if (req.user.workouts.length === updatedUser.workouts.length) workoutId = null;

      return res.json({ workoutId });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    logger.info('workoutController update route entered');
    try {
      const workout = await WorkoutService.update(req.user._id, req.body);

      return res.json({ workout });
    } catch (err) {
      return next(err instanceof Error ? err : new VError(err));
    }
  }
}

export default WorkoutController;
