import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import AddWorkoutForm from './AddWorkoutForm';
import WorkoutForm from './WorkoutForm';

const AddWorkout = ({ handleSubmit, onSubmit }) => (
  <WorkoutForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    fieldValues={
      {
        date: '2020-12-12',
        type: 'bike',
        distance: 10,
      }}

  />
);

AddWorkout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'addWorkoutForm',
})(AddWorkout);
