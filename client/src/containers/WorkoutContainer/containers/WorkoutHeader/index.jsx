import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/Header';
import { showModal } from '../../../../shared/modal/redux/actions';
import { setVisibleAlert } from '../../../../shared/alert/redux/actions';
import { fetchDeleteWorkout, removeCheckedWorkout, filterWorkoutsByTypes } from '../../redux/actions';
import { removeCheckedWorkoutTypes, addCheckedWorkoutTypes } from './redux/actions';

class WorkoutHeader extends Component {
  static propTypes = {
    workoutOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string || PropTypes.number)).isRequired,
    showModal: PropTypes.func.isRequired,
    fetchDeleteWorkout: PropTypes.func.isRequired,
    setVisibleAlert: PropTypes.func.isRequired,
    removeCheckedWorkout: PropTypes.func.isRequired,
  };

  showAddWorkoutModal = () => {
    const modalProps = { isInitValue: false };

    this.props.showModal('WorkoutModal', modalProps);
  };

  showEditWorkoutModal = () => {
    if (this.props.checkedWorkouts.length === 1) {
      const modalProps = { isInitValue: true };

      this.props.showModal('WorkoutModal', modalProps);
    } else {
      this.props.setVisibleAlert(true);
      window.setTimeout(() => {
        this.props.setVisibleAlert(false);
      }, 3000);
    }
  };

  deleteWorkout = () => {
    const workouts = [...this.props.checkedWorkouts];

    this.props.fetchDeleteWorkout(workouts);
    this.props.removeCheckedWorkout(workouts);
  };

  workoutTypes = () => {
    console.log('22222222')
    const ar = [...this.props.workoutOptions];
    console.log(ar)
    return ar.map(item => item.label);
  }

  handleCheckboxChange = (e) => {
    const checkbox = e.target;
    const workoutType = checkbox.getAttribute('name');
    console.log('!!!!!!!!111')
    console.log(workoutType)

    if (checkbox.checked) {
      this.props.addCheckedWorkoutTypes(workoutType)
        .then(() => this.props.filterWorkoutsByTypes(this.props.checkedWorkoutTypes));
    } else {
      this.props.removeCheckedWorkoutTypes(workoutType)
        .then(() => this.props.filterWorkoutsByTypes(this.props.checkedWorkoutTypes));
    }
  };

  render() {
    return (
      <Header
        showAddWorkoutModal={this.showAddWorkoutModal}
        showEditWorkoutModal={this.showEditWorkoutModal}
        deleteWorkout={this.deleteWorkout}
        workoutTypes={this.workoutTypes}
        onChange={this.handleCheckboxChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  workoutOptions: state.workout.workoutOptions.workoutOptions,
  checkedWorkouts: state.workout.checkedWorkouts.checkedWorkoutsList,
  checkedWorkoutTypes: state.workoutHeader.checkedWorkoutTypes.checkedWorkoutTypesList,
});

const mapDispatchToProps = {
  showModal,
  setVisibleAlert,
  fetchDeleteWorkout,
  removeCheckedWorkout,
  removeCheckedWorkoutTypes,
  addCheckedWorkoutTypes,
  filterWorkoutsByTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutHeader);
