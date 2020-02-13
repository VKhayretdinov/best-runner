import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchWorkoutRequest = createAction('FETCH_WORKOUT_REQUEST');
export const fetchWorkoutSuccess = createAction('FETCH_WORKOUT_SUCCESS');
export const fetchWorkoutFailure = createAction('FETCH_WORKOUT_FAILURE');

export const fetchWorkouts = () => async (dispatch) => {
  try {
    dispatch(fetchWorkoutRequest());

    const response = await api.workout.all();
    const { workouts } = response.data;

    const sortedWorkouts = {
      running: [],
      bike: [],
      walking: [],
      skiing: [],
    };

    workouts.forEach((workout) => {
      switch (workout.type) {
        case 'running':
          sortedWorkouts.running.push(workout);
          break;
        case 'bike':
          sortedWorkouts.bike.push(workout);
          break;
        case 'walking':
          sortedWorkouts.walking.push(workout);
          break;
        case 'skiing':
          sortedWorkouts.skiing.push(workout);
          break;
        default:
          break;
      }
    });

    dispatch(fetchWorkoutSuccess(sortedWorkouts));
  } catch (error) {
    dispatch(fetchWorkoutFailure(error));
  }
};

export const structureDistance = createAction('CREATE_STRUCTURE_DISTANCE');

export const createStructureDistance = payload => async (dispatch) => {
  dispatch(structureDistance(payload));
};

export const renderCharts = createAction('RENDER_CHARTS');

export const renderWorkoutCharts = payload => async (dispatch) => {
  dispatch(renderCharts(payload));
};
