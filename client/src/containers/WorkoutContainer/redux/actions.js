import { createAction, createActions } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchWorkoutRequest = createAction('FETCH_WORKOUT_REQUEST');
export const fetchWorkoutSuccess = createAction('FETCH_WORKOUT_SUCCESS');
export const fetchWorkoutFailure = createAction('FETCH_WORKOUT_FAILURE');

export const fetchWorkout = () => async (dispatch) => {
  try {
    dispatch(fetchWorkoutRequest());

    const response = await api.workout.getAll();
    const { workouts } = response.data;

    dispatch(fetchWorkoutSuccess(workouts));
  } catch (error) {
    dispatch(fetchWorkoutFailure(error));
  }
};

export const fetchAddWorkoutRequest = createAction('FETCH_ADD_WORKOUT_REQUEST');
export const fetchAddWorkoutSuccess = createAction('FETCH_ADD_WORKOUT_SUCCESS');
export const fetchAddWorkoutFailure = createAction('FETCH_ADD_WORKOUT_FAILURE');

export const fetchAddWorkout = newWorkout => async (dispatch) => {
  try {
    dispatch(fetchAddWorkoutRequest());

    const data = {
      date: newWorkout.date,
      type: newWorkout.type.value,
      distance: newWorkout.distance,
    };

    const response = await api.workout.add(data);

    const { workout } = response.data;

    dispatch(fetchAddWorkoutSuccess(workout));
  } catch (error) {
    dispatch(fetchAddWorkoutFailure(error));
  }
};

export const fetchDeleteWorkoutRequest = createAction('FETCH_DELETE_WORKOUT_REQUEST');
export const fetchDeleteWorkoutSuccess = createAction('FETCH_DELETE_WORKOUT_SUCCESS');
export const fetchDeleteWorkoutFailure = createAction('FETCH_DELETE_WORKOUT_FAILURE');

export const fetchDeleteWorkout = workouts => async (dispatch) => {
  try {
    dispatch(fetchDeleteWorkoutRequest());

    await api.workout.delete(workouts);

    dispatch(fetchDeleteWorkoutSuccess(workouts));
  } catch (error) {
    dispatch(fetchDeleteWorkoutFailure(error));
  }
};

export const fetchEditWorkoutRequest = createAction('FETCH_EDIT_WORKOUT_REQUEST');
export const fetchEditWorkoutSuccess = createAction('FETCH_EDIT_WORKOUT_SUCCESS');
export const fetchEditWorkoutFailure = createAction('FETCH_EDIT_WORKOUT_FAILURE');

export const { addCheckedWorkout, removeCheckedWorkout } = createActions({
  addCheckedWorkout: workoutName => (workoutName),
  removeCheckedWorkout: workoutName => (workoutName),
});
