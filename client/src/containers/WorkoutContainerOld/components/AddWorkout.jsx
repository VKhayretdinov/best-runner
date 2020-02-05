import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import WorkoutForm from './WorkoutForm';

const AddWorkout = ({ handleSubmit, onSubmit }) => (
  <WorkoutForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />
);

AddWorkout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  initialValues: { date: '2018-08-22', type: {label: "bike", value: "bike"}, distance: 100 },
});

export default connect(mapStateToProps)(reduxForm({
  form: 'addWorkoutForm',
  enableReinitialize: true,
})(AddWorkout));
