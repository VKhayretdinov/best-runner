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
import WorkoutInfo from './components/WorkoutInfo';

class WorkoutModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    options: WorkoutSelectOptions.isRequired,
    fetchCreateWorkout: PropTypes.func.isRequired,
    fetchUpdateWorkout: PropTypes.func.isRequired,
    currentWorkout: WorkoutProps,
    isInfo: PropTypes.bool,
  };

  static defaultProps = {
    isInfo: false,
    currentWorkout: null,
  };

  onSubmit = async (formValues) => {
    const workout = Object.assign({}, formValues);

    workout.type = formValues.type.value;
    workout.distance = Number(formValues.distance);

    // eslint-disable-next-line max-len
    const res = this.props.currentWorkout ? await this.props.fetchUpdateWorkout(workout) : await this.props.fetchCreateWorkout(workout);

    if (res) this.props.hideModal();
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

  modalContent = () => {
    if (this.props.isInfo) return <WorkoutInfo workout={this.props.currentWorkout} />;

    return <Workout onSubmit={this.onSubmit} options={this.props.options} initialValues={this.initValues()} />;
  };

  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        {this.modalContent()}
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
