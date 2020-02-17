import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchSignUpRequest = createAction('FETCH_SIGN_UP_REQUEST');
export const fetchSignUpSuccess = createAction('FETCH_SIGN_UP_SUCCESS');
export const fetchSignUpFailure = createAction('FETCH_SIGN_UP_FAILURE');

export const fetchSignUp = credentials => async (dispatch) => {
  try {
    dispatch(fetchSignUpRequest());

    await api.auth.signUp(credentials);

    dispatch(fetchSignUpSuccess());
  } catch (error) {
    const err = JSON.parse(JSON.stringify(error));
    const errors = Object.entries(err.response.data.errors).map(item => item[1].msg);

    dispatch(fetchSignUpFailure(errors));
  }
};
