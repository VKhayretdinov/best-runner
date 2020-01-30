import { handleActions } from 'redux-actions';

import {
  showAlertRequest,
} from './actions';

const defaultState = {
  isVisible: false,
};

export default handleActions(
  {
    [showAlertRequest](state, { payload }) {
      return {
        ...state,
        isVisible: payload,
      };
    },
  },
  defaultState,
);
