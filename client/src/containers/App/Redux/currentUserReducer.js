import { handleActions } from 'redux-actions';
import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,

  fetchLogOutRequest,
  fetchLogOutSuccess,
  fetchLogOutFailure,
} from './actions';

const defaultState = {
  data: null,
  error: null,
  isFetching: false,
};

export default handleActions(
  {
    [fetchCurrentUserRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchCurrentUserSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchCurrentUserFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [fetchLogOutRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchLogOutSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchLogOutFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
