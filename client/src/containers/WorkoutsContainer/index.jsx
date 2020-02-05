import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import WorkoutsTable from './components/WorkoutsTable';
import { showModal } from '../../shared/modal/redux/actions';
import { setVisibleAlert } from '../../shared/alert/redux/actions';
import { fetchDeleteWorkout, fetchWorkout, removeCheckedWorkout } from './redux/actions';

class WorkoutContainer extends Component {
  static propTypes = {

  };

  render() {
    return (
      <Fragment>
        <Row className="mb-3" />
        <Row>
          <Col>
            <WorkoutsTable />
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
  fetchWorkout,
  fetchDeleteWorkout,
  removeCheckedWorkout,
  showModal,
  setVisibleAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);
