import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import WorkoutForm from './WorkoutForm';
import { WorkoutSelectOptions } from '../../../../../shared/prop-types';

const Workout = ({
  // eslint-disable-next-line no-unused-vars
  handleSubmit, onSubmit, options, initialValues,
}) => (
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
  initialValues: PropTypes.shape({
    date: PropTypes.string,
    type: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
    distance: PropTypes.number,
    comment: PropTypes.string,
  }),
};

Workout.defaultProps = {
  initialValues: {},
};

export default reduxForm({
  form: 'signInForm',
  enableReinitialize: true,
})(Workout);
