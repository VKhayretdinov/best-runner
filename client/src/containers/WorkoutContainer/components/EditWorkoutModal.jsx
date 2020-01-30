import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyledModalContent,
  StyledClose,
  CloseIcon,
} from '../styled';
import { hideModal } from '../../../shared/modal/redux/actions';
import AddWorkout from './AddWorkout';
import { fetchAddWorkout } from '../redux/actions';

class EditWorkoutModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    fetchAddWorkout: PropTypes.func.isRequired,
  };

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  handleEditWorkoutSubmit = (formValues) => {
    this.props.fetchAddWorkout(formValues);
  };

  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        <AddWorkout onSubmit={this.handleEditWorkoutSubmit} />
      </StyledModalContent>);
  }
}

const mapStateToProps = state => ({
  workouts: state.workout.workouts.workouts,
});

const mapDispatchToProps = {
  hideModal,
  // fetchAddWorkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkoutModal);
