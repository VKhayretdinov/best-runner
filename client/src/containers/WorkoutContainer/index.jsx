import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import WorkoutTable from './containers/WorkoutTable';
import { showModal } from '../../shared/modal/redux/actions';
import { setVisibleAlert } from '../../shared/alert/redux/actions';
import { fetchDeleteWorkout, fetchWorkout, removeCheckedWorkout } from './redux/actions';
import WorkoutHeader from './containers/WorkoutHeader/index';

class WorkoutContainer extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    fetchDeleteWorkout: PropTypes.func.isRequired,
    checkedWorkouts: PropTypes.arrayOf(PropTypes.object).isRequired,
    setVisibleAlert: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Container>
        <Row className="mb-3">
          <WorkoutHeader
            showAddWorkoutModal={this.showAddWorkoutModal}
            showEditWorkoutModal={this.showEditWorkoutModal}
            deleteWorkout={this.deleteWorkout}
          />
        </Row>
        <Row>
          <Col>
            <WorkoutTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workout.workouts.workouts,
  checkedWorkouts: state.workout.checkedWorkouts.checkedWorkoutsList,
  form: state.form,
});

const mapDispatchToProps = {
  fetchWorkout,
  fetchDeleteWorkout,
  removeCheckedWorkout,
  showModal,
  setVisibleAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);
