import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  addFiler,
  removeFiler,
} from './actions';

const controlPanelDefaultState = {
  filters: [],
};

const controlPanelReducer = handleActions(
  {
    [addFiler](state, { payload }) {
      return {
        ...state,
        filters: [...state.filters, payload],
      };
    },
    [removeFiler](state, { payload }) {
      return {
        ...state,
        filters: state.filters.filter(item => item !== payload),
      };
    },
  },
  controlPanelDefaultState,
);

export default combineReducers({
  controlPanel: controlPanelReducer,
});
