import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchWorkoutRequest,
  fetchWorkoutSuccess,
  fetchWorkoutFailure,

  fetchCreateWorkoutRequest,
  fetchCreateWorkoutSuccess,
  fetchCreateWorkoutFailure,

  fetchDeleteWorkoutRequest,
  fetchDeleteWorkoutSuccess,
  fetchDeleteWorkoutFailure,

  fetchUpdateWorkoutRequest,
  fetchUpdateWorkoutSuccess,
  fetchUpdateWorkoutFailure,
} from './actions';

const updateWorkouts = (oldWorkouts, updated) => {
  // eslint-disable-next-line array-callback-return
  return oldWorkouts.map((workout) => {
    // eslint-disable-next-line no-underscore-dangle
    if (workout._id === updated._id) {
      return {
        ...updated,
        date: updated.date,
        type: updated.type,
        distance: updated.distance,
        comment: updated.comment,
      };
    }
  });
};

const workoutDefaultState = {
  workouts: [],
  isFetching: false,
  error: null,
};

const workoutReducer = handleActions(
  {
    [fetchWorkoutRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchWorkoutSuccess](state, { payload }) {
      return {
        ...state,
        workouts: [...payload],
        isFetching: false,
        error: null,
      };
    },
    [fetchWorkoutFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [fetchCreateWorkoutRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchCreateWorkoutSuccess](state, { payload }) {
      return {
        ...state,
        workouts: [...state.workouts, payload],
        isFetching: false,
        error: 'null',
      };
    },
    [fetchCreateWorkoutFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [fetchDeleteWorkoutRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchDeleteWorkoutSuccess](state, { payload }) {
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        workouts: state.workouts.filter(item => item._id !== payload),
        isFetching: false,
        error: null,
      };
    },
    [fetchDeleteWorkoutFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [fetchUpdateWorkoutRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchUpdateWorkoutSuccess](state, { payload }) {
      return {
        ...state,
        workouts: updateWorkouts(state.workouts, payload),
        isFetching: false,
        error: 'null',
      };
    },
    [fetchUpdateWorkoutFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  workoutDefaultState,
);

// TODO: Maybe move it?
const workoutOptionsDefaultState = {
  workoutOptions: [
    { label: 'running', value: 'running' },
    { label: 'bike', value: 'bike' },
    { label: 'walking', value: 'walking' },
    { label: 'skiing', value: 'skiing' },
  ],
};

const workoutOptionsReducers = handleActions(
  {
  },
  workoutOptionsDefaultState,
);

export default combineReducers({
  workouts: workoutReducer,
  workoutOptions: workoutOptionsReducers,
});
