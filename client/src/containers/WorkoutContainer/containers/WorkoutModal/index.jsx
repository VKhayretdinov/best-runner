import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyledModalContent,
  StyledClose,
  CloseIcon,
} from '../../styled';
import { hideModal } from '../../../../shared/modal/redux/actions';
import AddEditWorkout from './components/AddEditWorkout';
import { fetchAddWorkout, fetchEditWorkout } from '../../redux/actions';

class WorkoutModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    fetchAddWorkout: PropTypes.func.isRequired,
    // isDefault: PropTypes.bool.isRequired,
  };

  componentWillMount() {

  }

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  handleAddWorkoutSubmit = (formValues) => {
    this.props.fetchAddWorkout(formValues);
  };

  handleEditWorkoutSubmit = (formValues) => {
    console.log(formValues);
    this.props.fetchEditWorkout(formValues);
  };

  handleSubmit = (formValues) => {
    if (this.props.modalProps.isInitValue) {
      const workout = Object.assign({}, this.props.checkedWorkouts[0]);

      workout.date = formValues.date;
      workout.type = formValues.type.value;
      workout.distance = formValues.distance;

      this.handleEditWorkoutSubmit(workout);
    } else {
      this.handleAddWorkoutSubmit(formValues);
    }
  };

  initValues = () => {
    const checked = Object.assign({}, this.props.checkedWorkouts[0]);

    checked.type = { label: checked.type, value: checked.type };

    return checked;
  };


  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        <AddEditWorkout onSubmit={this.handleSubmit} initValues={this.initValues} />
      </StyledModalContent>);
  }
}

const mapStateToProps = state => ({
  workouts: state.workout.workouts.workouts,
  modalProps: state.modal.modalProps,
  checkedWorkouts: state.workout.checkedWorkouts.checkedWorkoutsList,
});

const mapDispatchToProps = {
  hideModal,
  fetchAddWorkout,
  fetchEditWorkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutModal);
