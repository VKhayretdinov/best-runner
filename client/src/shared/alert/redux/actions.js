import { createAction } from 'redux-actions';

export const showAlertRequest = createAction('OPEN_ALERT');

export const setVisibleAlert = isVisible => async (dispatch) => {
  dispatch(showAlertRequest(isVisible));
};
