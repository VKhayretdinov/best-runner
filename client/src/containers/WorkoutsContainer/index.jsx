import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import WorkoutsTable from './components/WorkoutsTable';
import { WorkoutsArray } from '../../shared/prop-types';
import { fetchWorkouts, fetchDeleteWorkout } from './redux/actions';
import WorkoutsControlPanel from './containers/WorkoutsControlPanel';
import { showModal } from '../../shared/modal/redux/actions';

class WorkoutsContainer extends Component {
  static propTypes = {
    workouts: WorkoutsArray.isRequired,
    fetchWorkouts: PropTypes.func.isRequired,
    fetchDeleteWorkout: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  handleDelete = (e) => {
    const workoutId = e.currentTarget.getAttribute('workout-id');
    this.props.fetchDeleteWorkout(workoutId);
  };

  handleUpdate = (e) => {
    const workoutId = e.currentTarget.getAttribute('workout-id');

    const currentWorkout = this.props.workouts.find(workout => workout.id === workoutId);
    const modalProps = { currentWorkout };

    this.props.showModal('WorkoutModal', modalProps);
  };

  render() {
    return (
      <Fragment>
        <Row className="mb-3">
          <WorkoutsControlPanel />
        </Row>
        <Row>
          <Col>
            <WorkoutsTable
              workouts={this.props.workouts}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workout.workouts.workouts,
});

const mapDispatchToProps = {
  fetchWorkouts,
  fetchDeleteWorkout,
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsContainer);
