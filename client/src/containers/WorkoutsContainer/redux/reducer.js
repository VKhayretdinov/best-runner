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
  filterByTypes,
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
  })
);

const sort = (data, sortBy, sortedBy) => {
  if (sortedBy === sortBy) return { data: data.reverse(), sortedBy };

  if (sortBy === 'date') {
    const sorted = data.sort((cur, next) => (cur.date > next.date ? 1 : -1));
    return { data: sorted, sortedBy: sortBy };
  }

  const sorted = data.sort((cur, next) => (cur.distance > next.distance ? 1 : -1));

  return { data: sorted, sortedBy: sortBy };
};

const filter = (data, filters) => {
  if (filters.length === 0) return data;

  return data.filter(workout => filters.includes(workout.type));
};

const workoutDefaultState = {
  unSortedWorkouts: [],
  sortedBy: '',
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
        unSortedWorkouts: [...payload],
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
        unSortedWorkouts: [...state.unSortedWorkouts, payload],
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
        unSortedWorkouts: state.unSortedWorkouts.filter(item => item.id !== payload),
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
        unSortedWorkouts: updateWorkouts([...state.unSortedWorkouts], payload),
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
      const { data, sortedBy } = sort([...state.workouts], payload, state.sortedBy);
      return {
        ...state,
        workouts: data,
        sortedBy,
      };
    },
    [resetSort](state) {
      return {
        ...state,
        workouts: [...state.unSortedWorkouts],
        sortedBy: '',
      };
    },
    [filterByTypes](state, { payload }) {
      return {
        ...state,
        workouts: filter([...state.unSortedWorkouts], payload),
      };
    },
  },
  workoutDefaultState,
);

export default combineReducers({
  workouts: workoutReducer,
});
