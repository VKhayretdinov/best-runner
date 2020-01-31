import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchWorkoutRequest,
  fetchWorkoutSuccess,
  fetchWorkoutFailure,

  fetchAddWorkoutRequest,
  fetchAddWorkoutSuccess,
  fetchAddWorkoutFailure,

  fetchDeleteWorkoutRequest,
  fetchDeleteWorkoutSuccess,
  fetchDeleteWorkoutFailure,

  fetchEditWorkoutRequest,
  fetchEditWorkoutSuccess,
  fetchEditWorkoutFailure,

  addCheckedWorkout,
  removeCheckedWorkout,

  sortByDistance,
} from './actions';

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
    [fetchAddWorkoutRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchAddWorkoutSuccess](state, { payload }) {
      return {
        ...state,
        workouts: [...state.workouts, payload],
        isFetching: false,
        error: 'null',
      };
    },
    [fetchAddWorkoutFailure](state, { payload }) {
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
        workouts: state.workouts.filter(item => !payload.includes(item._id)),
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
    [fetchEditWorkoutRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchEditWorkoutSuccess](state, { payload }) {
      console.log(payload);
      return {
        ...state,
        workouts: state.workouts.map((item) => {
          if (item._id === payload._id) {
            return {
              ...item,
              date: payload.date,
              type: payload.type,
              distance: payload.distance,
            };
          }
          return item;
        }),
        isFetching: false,
        error: 'null',
      };
    },
    [fetchEditWorkoutFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [sortByDistance](state) {
      return {
        ...state,
        workouts: [...state.workouts.sort((curr, next) => {
          if (curr.distance > next.distance) { return 1; }
          if (curr.distance < next.distance) { return -1; }
          return 0;
        })],
      };
    },
  },
  workoutDefaultState,
);

const checkedWorkoutsDefaultState = {
  checkedWorkoutsList: [],
};

const checkedWorkoutsReducers = handleActions(
  {
    [addCheckedWorkout](state, { payload }) {
      return {
        checkedWorkoutsList: [...state.checkedWorkoutsList, payload],
      };
    },
    [removeCheckedWorkout](state, { payload }) {
      return {
        checkedWorkoutsList: state.checkedWorkoutsList.filter(item => !payload.includes(item._id)),
      };
    },
  },
  checkedWorkoutsDefaultState,
);

export default combineReducers({
  workouts: workoutReducer,
  checkedWorkouts: checkedWorkoutsReducers,
});
