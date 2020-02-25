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

  sortWorkoutsBy,
  resetSort,
  addFiler,
  removeFiler,
} from './actions';

const updateWorkouts = (oldWorkouts, updated) => (
  // eslint-disable-next-line array-callback-return,consistent-return
  oldWorkouts.map((workout) => {
    // eslint-disable-next-line no-underscore-dangle
    if (workout.id === updated.id) {
      return {
        ...updated,
        date: updated.date,
        type: updated.type,
        distance: updated.distance,
        comment: updated.comment,
      };
    }
    return workout;
  })
);

const workoutDefaultState = {
  sortedBy: 'date',
  direction: 'des',
  workoutsFilters: [],
  workouts: [],
  isFetching: false,
  error: null,
  workoutSelectOptions: [
    { label: 'running', value: 'running' },
    { label: 'bike', value: 'bike' },
    { label: 'walking', value: 'walking' },
    { label: 'skiing', value: 'skiing' },
  ],
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
        sortedBy: '',
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
        workouts: state.workouts.filter(item => item.id !== payload),
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
        workouts: updateWorkouts([...state.workouts], payload),
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
    [sortWorkoutsBy](state, { payload }) {
      let { direction } = state;

      if (payload === state.sortedBy) {
        // eslint-disable-next-line no-unused-expressions
        state.direction === 'des' ? (direction = 'asc') : (direction = 'des');
      }

      return {
        ...state,
        sortedBy: payload,
        direction,
      };
    },
    [resetSort](state) {
      return {
        ...state,
        sortedBy: '',
      };
    },
    [addFiler](state, { payload }) {
      return {
        ...state,
        workoutsFilters: [...state.workoutsFilters, payload],
      };
    },
    [removeFiler](state, { payload }) {
      return {
        ...state,
        workoutsFilters: state.workoutsFilters.filter(item => item !== payload),
      };
    },
  },
  workoutDefaultState,
);

export default combineReducers({
  workouts: workoutReducer,
});
