import {createAction} from 'redux-actions';

export const addCheckedTypes = createAction('ADD_CHECKED_WORKOUT_TYPES');

export const addCheckedWorkoutTypes = types => async (dispatch) => {
  dispatch(addCheckedTypes(types));
};

export const removeCheckedTypes = createAction('REMOVE_CHECKED_WORKOUT_TYPES');

export const removeCheckedWorkoutTypes = types => async (dispatch) => {
  dispatch(removeCheckedTypes(types));
};
