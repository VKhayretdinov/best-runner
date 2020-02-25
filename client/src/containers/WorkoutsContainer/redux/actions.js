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

    dispatch(fetchWorkoutSuccess(workouts));
  } catch (error) {
    dispatch(fetchWorkoutFailure(error));
  }
};

export const fetchCreateWorkoutRequest = createAction('FETCH_CREATE_WORKOUT_REQUEST');
export const fetchCreateWorkoutSuccess = createAction('FETCH_CREATE_WORKOUT_SUCCESS');
export const fetchCreateWorkoutFailure = createAction('FETCH_CREATE_WORKOUT_FAILURE');

// eslint-disable-next-line consistent-return
export const fetchCreateWorkout = workout => async (dispatch) => {
  try {
    dispatch(fetchCreateWorkoutRequest());

    const response = await api.workout.create(workout);

    await dispatch(fetchCreateWorkoutSuccess(response.data.workout));
    return true;
  } catch (error) {
    dispatch(fetchCreateWorkoutFailure(error));
  }
};

export const fetchDeleteWorkoutRequest = createAction('FETCH_DELETE_WORKOUT_REQUEST');
export const fetchDeleteWorkoutSuccess = createAction('FETCH_DELETE_WORKOUT_SUCCESS');
export const fetchDeleteWorkoutFailure = createAction('FETCH_DELETE_WORKOUT_FAILURE');

export const fetchDeleteWorkout = workoutId => async (dispatch) => {
  try {
    dispatch(fetchDeleteWorkoutRequest(workoutId));

    const response = await api.workout.delete({ workoutId });

    dispatch(fetchDeleteWorkoutSuccess(response.data.workoutId));
  } catch (error) {
    dispatch(fetchDeleteWorkoutFailure(error));
  }
};

export const fetchUpdateWorkoutRequest = createAction('FETCH_UPDATE_WORKOUT_REQUEST');
export const fetchUpdateWorkoutSuccess = createAction('FETCH_UPDATE_WORKOUT_SUCCESS');
export const fetchUpdateWorkoutFailure = createAction('FETCH_UPDATE_WORKOUT_FAILURE');

// eslint-disable-next-line consistent-return
export const fetchUpdateWorkout = workout => async (dispatch) => {
  try {
    dispatch(fetchUpdateWorkoutRequest());

    const response = await api.workout.update(workout);

    dispatch(fetchUpdateWorkoutSuccess(response.data.workout));
    return true;
  } catch (error) {
    dispatch(fetchUpdateWorkoutFailure(error));
  }
};

export const sortWorkoutsBy = createAction('SORT_WORKOUTS');

export const sortWorkouts = sortBy => async (dispatch) => {
  dispatch(sortWorkoutsBy(sortBy));
};

export const resetSort = createAction('RESET_SORT_WORKOUTS');

export const resetSortWorkouts = () => async (dispatch) => {
  dispatch(resetSort());
};

export const addFiler = createAction('ADD_FILTER');

export const addWorkoutFilter = filter => async (dispatch) => {
  dispatch(addFiler(filter));
};

export const removeFiler = createAction('REMOVE_FILTER');

export const removeWorkoutFilter = filter => async (dispatch) => {
  dispatch(removeFiler(filter));
};
