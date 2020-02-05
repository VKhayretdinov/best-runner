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

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  handleAddWorkoutSubmit = formValues => this.props.fetchAddWorkout(formValues).then(r => (r));

  handleEditWorkoutSubmit = (formValues) => {
    this.props.fetchEditWorkout(formValues);
  };

  handleSubmit = (formValues) => {
    let res;

    if (this.props.isInitValue) {
      const workout = Object.assign({}, this.props.checkedWorkouts[0]);

      workout.date = formValues.date;
      workout.type = formValues.type.value;
      workout.distance = formValues.distance;

      res = this.handleEditWorkoutSubmit(workout);
    } else {
      res = this.handleAddWorkoutSubmit(formValues);
    }
    if (res) { this.props.hideModal(); }
  };

  initValues = () => {
    console.log('HUY')
    console.log(this.props.workoutOptions)
    if (this.props.isInitValue) {
      const checked = Object.assign({}, this.props.checkedWorkouts[0]);

      checked.type = { label: checked.type, value: checked.type };
      console.log(checked)
      return checked;
    }

    return {};
  };


  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        <AddEditWorkout onSubmit={this.handleSubmit} initValues={this.initValues} options={this.props.workoutOptions} />
      </StyledModalContent>);
  }
}

const mapStateToProps = state => ({
  workouts: state.workout.workouts.workouts,
  isInitValue: state.modal.modalProps.isInitValue,
  checkedWorkouts: state.workout.checkedWorkouts.checkedWorkoutsList,
  workoutOptions: state.workout.workoutOptions.workoutOptions,
});

const mapDispatchToProps = {
  hideModal,
  fetchAddWorkout,
  fetchEditWorkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutModal);
