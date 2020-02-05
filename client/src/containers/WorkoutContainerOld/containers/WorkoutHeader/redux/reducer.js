import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  addCheckedTypes,
  removeCheckedTypes,
} from './actions';

const checkedWorkoutTypesDefaultState = {
  checkedWorkoutTypesList: [],
};

const checkedWorkoutTypesReducers = handleActions(
  {
    [addCheckedTypes](state, { payload }) {
      return {
        ...state,
        checkedWorkoutTypesList: [...state.checkedWorkoutTypesList, payload],
      };
    },
    [removeCheckedTypes](state, { payload }) {
      console.log('remove')
      console.log(payload)
      console.log(state.checkedWorkoutTypesList.filter(item => item !== payload))
      return {
        ...state,
        checkedWorkoutTypesList: state.checkedWorkoutTypesList.filter(item => item !== payload),
      };
    },
  },
  checkedWorkoutTypesDefaultState,
);

export default combineReducers({
  checkedWorkoutTypes: checkedWorkoutTypesReducers,
});
