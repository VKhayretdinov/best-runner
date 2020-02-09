import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ControlPanel from './components/ControlPanel';
import { showModal } from '../../../../shared/modal/redux/actions';
import { WorkoutSelectOptions } from '../../../../shared/prop-types/';
import { addWorkoutFilter, removeWorkoutFilter } from './redux/actions';
import { filterWorkoutsByTypes } from '../../redux/actions';
import { fetchLogOut } from '../../../App/Redux/actions';

class WorkoutsControlPanel extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    filterWorkoutsByTypes: PropTypes.func.isRequired,
    addWorkoutFilter: PropTypes.func.isRequired,
    removeWorkoutFilter: PropTypes.func.isRequired,
    fetchLogOut: PropTypes.func.isRequired,
    workoutSelectOptions: WorkoutSelectOptions.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
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
      this.props.filterWorkoutsByTypes(this.props.filters);
    } else {
      await this.props.removeWorkoutFilter(workoutType);
      this.props.filterWorkoutsByTypes(this.props.filters);
    }
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
  filters: state.controlPanel.controlPanel.filters,
});

const mapDispatchToProps = {
  showModal,
  filterWorkoutsByTypes,
  addWorkoutFilter,
  removeWorkoutFilter,
  fetchLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsControlPanel);
