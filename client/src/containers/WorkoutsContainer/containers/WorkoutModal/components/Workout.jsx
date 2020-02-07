import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import WorkoutForm from './WorkoutForm';
import { WorkoutSelectOptions } from '../../../../../shared/prop-types';

const Workout = ({ handleSubmit, onSubmit, options }) => (
  <WorkoutForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    options={options}
  />
);

Workout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  options: WorkoutSelectOptions.isRequired,
};

export default reduxForm({
  form: 'signInForm',
})(Workout);
