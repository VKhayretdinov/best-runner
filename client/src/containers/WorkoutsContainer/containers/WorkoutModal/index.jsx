import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyledModalContent,
  StyledClose,
  CloseIcon,
} from './styled';
import { hideModal } from '../../../../shared/modal/redux/actions';
import Workout from './components/Workout';
import { Workout as WorkoutProps, WorkoutSelectOptions } from '../../../../shared/prop-types';
import { fetchCreateWorkout, fetchUpdateWorkout } from '../../redux/actions';

class WorkoutModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    options: WorkoutSelectOptions.isRequired,
    fetchCreateWorkout: PropTypes.func.isRequired,
    fetchUpdateWorkout: WorkoutProps.isRequired,
    currentWorkout: WorkoutProps.isRequired,
  };

  onSubmit = (formValues) => {
    const workout = Object.assign({}, formValues);

    workout.type = formValues.type.value;
    workout.distance = Number(formValues.distance);
    // eslint-disable-next-line no-unused-expressions
    this.props.currentWorkout ? this.props.fetchUpdateWorkout(workout) : this.props.fetchCreateWorkout(workout);
  };

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  initValues = () => {
    const initValues = Object.assign({}, this.props.currentWorkout);

    initValues.type = { label: initValues.type, value: initValues.type };

    return initValues;
  };

  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        <Workout onSubmit={this.onSubmit} options={this.props.options} initialValues={this.initValues()} />
      </StyledModalContent>);
  }
}

const mapStateToProps = state => ({
  options: state.workout.workouts.workoutSelectOptions,
});

const mapDispatchToProps = {
  hideModal,
  fetchCreateWorkout,
  fetchUpdateWorkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutModal);
