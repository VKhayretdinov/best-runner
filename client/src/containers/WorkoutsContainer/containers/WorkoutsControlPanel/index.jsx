import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ControlPanel from './components/ControlPanel';
import { showModal } from '../../../../shared/modal/redux/actions';
import { WorkoutSelectOptions } from '../../../../shared/prop-types/';
import { sortWorkouts, addWorkoutFilter, removeWorkoutFilter } from '../../redux/actions';
import { fetchLogOut } from '../../../App/Redux/actions';

class WorkoutsControlPanel extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    sortWorkouts: PropTypes.func.isRequired,
    addWorkoutFilter: PropTypes.func.isRequired,
    removeWorkoutFilter: PropTypes.func.isRequired,
    fetchLogOut: PropTypes.func.isRequired,
    workoutSelectOptions: WorkoutSelectOptions.isRequired,
  };

  handleAddWorkout = () => {
    this.props.showModal('WorkoutModal');
  };

  filterTypes = () => this.props.workoutSelectOptions.map(workout => workout.label);

  handleChange = async (e) => {
    const checkbox = e.target;
    const workoutType = checkbox.getAttribute('name');

    if (checkbox.checked) {
      await this.props.addWorkoutFilter(workoutType);
    } else {
      await this.props.removeWorkoutFilter(workoutType);
    }

    this.props.sortWorkouts('types');
  };

  handleLogOut = () => {
    this.props.fetchLogOut();
  };

  render() {
    return (
      <ControlPanel
        handleAddWorkout={this.handleAddWorkout}
        filterTypes={this.filterTypes}
        handleChange={this.handleChange}
        handleLogOut={this.handleLogOut}
      />
    );
  }
}

const mapStateToProps = state => ({
  workoutSelectOptions: state.workout.workouts.workoutSelectOptions,
});

const mapDispatchToProps = {
  showModal,
  sortWorkouts,
  addWorkoutFilter,
  removeWorkoutFilter,
  fetchLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsControlPanel);
