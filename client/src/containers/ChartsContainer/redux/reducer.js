import { handleActions } from 'redux-actions';
import {
  fetchWorkoutRequest,
  fetchWorkoutSuccess,
  fetchWorkoutFailure,

  structureDistance,

  renderCharts,
} from './actions';

const workoutDefaultState = {
  workouts: {
    running: [],
    bike: [],
    walking: [],
    skiing: [],
  },
  isFetching: false,
  error: null,
  workoutsType: ['running', 'bike', 'walking', 'skiing'],
  structuredDistance: {},
  isRenderCharts: false,
};

const sortedWorkoutReducer = handleActions(
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
        workouts: Object.assign({}, payload),
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
    [structureDistance](state, { payload }) {
      return {
        ...state,
        structuredDistance: payload,
      };
    },
    [renderCharts](state, { payload }) {
      return {
        ...state,
        isRenderCharts: payload,
      };
    },
  },
  workoutDefaultState,
);

export default sortedWorkoutReducer;
