import { createAction } from 'redux-actions';

export const addFiler = createAction('ADD_FILTER');

export const addWorkoutFilter = filter => async (dispatch) => {
  dispatch(addFiler(filter));
};

export const removeFiler = createAction('REMOVE_FILTER');

export const removeWorkoutFilter = filter => async (dispatch) => {
  dispatch(removeFiler(filter));
};

