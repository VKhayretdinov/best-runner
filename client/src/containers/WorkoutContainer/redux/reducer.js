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
  sortByDate,
  filterByTypes,
} from './actions';

const workoutDefaultState = {
  workouts: [],
  unFilteredWorkouts: [],
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
        unFilteredWorkouts: [...payload],
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
        unFilteredWorkouts: [...state.unFilteredWorkouts, payload],
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
        workouts: state.workouts.filter(item => !payload.some(i => i._id === item._id)),
        unFilteredWorkouts: state.unFilteredWorkouts.filter(item => !payload.some(i => i._id === item._id)),
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
        unFilteredWorkouts: state.unFilteredWorkouts.map((item) => {
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
        workouts: [...state.workouts.sort((curr, next) => (
          curr.distance > next.distance ? 1 : -1))],
        unFilteredWorkouts: [...state.unFilteredWorkouts.sort((curr, next) => (
          curr.distance > next.distance ? 1 : -1))],
      };
    },
    [sortByDate](state) {
      return {
        ...state,
        workouts: [...state.workouts.sort((curr, next) => (curr.date > next.date ? 1 : -1))],
        unFilteredWorkouts: [...state.unFilteredWorkouts.sort((curr, next) => (curr.date > next.date ? 1 : -1))],
      };
    },
    [filterByTypes](state, { payload }) {
      if (payload.length === 0) {
        return {
          ...state,
          workouts: state.unFilteredWorkouts,
        };
      }

      return {
        ...state,
        workouts: state.unFilteredWorkouts.filter(item => [...payload].indexOf(item.type) > -1),
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
      console.log(payload);
      return {
        checkedWorkoutsList: state.checkedWorkoutsList.filter(item => !payload.some(i => i._id === item._id)),
      };
    },
  },
  checkedWorkoutsDefaultState,
);

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
  checkedWorkouts: checkedWorkoutsReducers,
  workoutOptions: workoutOptionsReducers,
});
