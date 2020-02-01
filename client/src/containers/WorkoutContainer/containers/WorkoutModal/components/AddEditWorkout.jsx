import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import WorkoutForm from './WorkoutForm';

const AddEditWorkout = ({ handleSubmit, onSubmit, initValues, options }) => (
  <WorkoutForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    options={options}
  />
);

AddEditWorkout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initValues: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  a: state.form,
  initialValues: ownProps.initValues(),
});

export default connect(mapStateToProps)(reduxForm({
  form: 'workoutForm',
  enableReinitialize: true,
})(AddEditWorkout));
