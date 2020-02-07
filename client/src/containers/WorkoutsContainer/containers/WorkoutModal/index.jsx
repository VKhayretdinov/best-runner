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
import { WorkoutSelectOptions } from '../../../../shared/prop-types';
import { fetchCreateWorkout } from '../../redux/actions';

class WorkoutModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    options: WorkoutSelectOptions.isRequired,
    fetchCreateWorkout: PropTypes.func.isRequired,
  };

  onSubmit = (formValues) => {
    const workout = Object.assign({}, formValues);

    workout.type = formValues.type.value;
    workout.distance = Number(formValues.distance);
    this.props.fetchCreateWorkout(workout);
  };

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        <Workout onSubmit={this.onSubmit} options={this.props.options} />
      </StyledModalContent>);
  }
}

const mapStateToProps = state => ({
  options: state.workout.workouts.workoutSelectOptions,
});

const mapDispatchToProps = {
  hideModal,
  fetchCreateWorkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutModal);
