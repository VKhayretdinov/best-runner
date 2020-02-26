import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import WorkoutsTable from './components/WorkoutsTable';
import { WorkoutsArray } from '../../shared/prop-types';
import { fetchWorkouts, fetchDeleteWorkout, sortWorkouts, resetSortWorkouts } from './redux/actions';
import WorkoutsControlPanel from './containers/WorkoutsControlPanel';
import { showModal } from '../../shared/modal/redux/actions';
import sortedWorkoutsSelector from './selectors/Workouts';

class WorkoutsContainer extends Component {
  static propTypes = {
    workouts: WorkoutsArray.isRequired,
    fetchWorkouts: PropTypes.func.isRequired,
    fetchDeleteWorkout: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    sortWorkouts: PropTypes.func.isRequired,
    sortedBy: PropTypes.string.isRequired,
    resetSortWorkouts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  getClickedWorkout = (e) => {
    const workoutId = e.currentTarget.getAttribute('workout-id');

    return this.props.workouts.find(workout => workout.id === workoutId);
  };

  handleDelete = (e) => {
    const workoutId = e.currentTarget.getAttribute('workout-id');

    confirmAlert({
      title: 'Delete confirmation',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.props.fetchDeleteWorkout(workoutId);
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  handleUpdate = (e) => {
    const currentWorkout = this.getClickedWorkout(e);
    const modalProps = { currentWorkout };

    this.props.showModal('WorkoutModal', modalProps);
  };

  handleView = (e) => {
    const currentWorkout = this.getClickedWorkout(e);
    const modalProps = {
      currentWorkout,
      isInfo: true,
    };

    this.props.showModal('WorkoutModal', modalProps);
  };

  handleSort = (sortBy) => {
    this.props.sortWorkouts(sortBy);
  };

  handleResetSort = () => {
    this.props.resetSortWorkouts();
  };

  render() {
    return (
      <Fragment>
        <Row className="mb-3">
          <Col>
            <WorkoutsControlPanel />
          </Col>
        </Row>
        <Row>
          <Col>
            <WorkoutsTable
              workouts={this.props.workouts}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
              handleSort={this.handleSort}
              handleView={this.handleView}
              sortedBy={this.props.sortedBy}
              handleReset={this.handleResetSort}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  workouts: sortedWorkoutsSelector(state.workout.workouts),
  sortedBy: state.workout.workouts.sortedBy,
});

const mapDispatchToProps = {
  fetchWorkouts,
  fetchDeleteWorkout,
  showModal,
  sortWorkouts,
  resetSortWorkouts,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer);
