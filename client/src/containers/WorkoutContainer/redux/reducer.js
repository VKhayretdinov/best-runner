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

  addCheckedWorkout,
  removeCheckedWorkout,
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
  },
  workoutDefaultState,
);
//
// const addWorkoutReducer = handleActions(
//   {
//     [fetchAddWorkoutRequest](state) {
//       return {
//         ...state,
//         isFetching: true,
//       };
//     },
//     [fetchAddWorkoutSuccess](state, { payload }) {
//       console.log('add payload')
//       console.log(payload)
//       console.log('workouts')
//       console.log(state)
//       console.log('workouts + payload')
//       console.log([...state.workouts])
//       return {
//         ...state,
//         workouts: [...state.workouts, payload],
//         isFetching: false,
//         error: 'null',
//       };
//     },
//     [fetchAddWorkoutFailure](state, { payload }) {
//       return {
//         ...state,
//         isFetching: false,
//         error: payload,
//       };
//     },
//     [fetchDeleteWorkoutRequest](state) {
//       return {
//         ...state,
//         isFetching: true,
//       };
//     },
//     [fetchDeleteWorkoutSuccess](state, { payload }) {
//       console.log(state)
//       return {
//         ...state,
//         workouts: state.workouts.filter(item => payload.includes(item._id)),
//         isFetching: false,
//         error: null,
//       };
//     },
//     [fetchDeleteWorkoutFailure](state, { payload }) {
//       return {
//         ...state,
//         isFetching: false,
//         error: payload,
//       };
//     },
//   },
//   workoutDefaultState,
// );
//
// const deleteWorkoutReducer = handleActions(
//   {
//     [fetchDeleteWorkoutRequest](state) {
//       return {
//         ...state,
//         isFetching: true,
//       };
//     },
//     [fetchDeleteWorkoutSuccess](state, { payload }) {
//       console.log(state)
//       return {
//         ...state,
//         workouts: state.workouts.filter(item => payload.includes(item._id)),
//         isFetching: false,
//         error: null,
//       };
//     },
//     [fetchDeleteWorkoutFailure](state, { payload }) {
//       return {
//         ...state,
//         isFetching: false,
//         error: payload,
//       };
//     },
//   },
//   workoutDefaultState,
// );

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
        checkedWorkoutsList: state.checkedWorkoutsList.filter(item => item !== payload),
      };
    },
  },
  checkedWorkoutsDefaultState,
);

export default combineReducers({
  workouts: workoutReducer,
  checkedWorkouts: checkedWorkoutsReducers,
});
