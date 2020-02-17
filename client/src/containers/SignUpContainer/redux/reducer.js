import { handleActions } from 'redux-actions';
import {
  fetchSignUpRequest,
  fetchSignUpSuccess,
  fetchSignUpFailure,


} from './actions';

const defaultState = {
  error: null,
  isFetching: false,
  isRegister: false,
};

export default handleActions(
  {
    [fetchSignUpRequest](state) {
      return {
        ...state,
        isFetching: true,
        isRegister: false,
      };
    },
    [fetchSignUpSuccess](state) {
      return {
        ...state,
        isFetching: false,
        isRegister: true,
        error: null,
      };
    },
    [fetchSignUpFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        isRegister: false,
        error: [...payload],
      };
    },
  },
  defaultState,
);
