import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, ButtonGroup, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import WorkoutTable from './containers/WorkoutTable';
import { AddButton, DeleteButton, EditButton } from '../../shared/styledComponents/Button';
import { showModal } from '../../shared/modal/redux/actions';
import { setVisibleAlert } from '../../shared/alert/redux/actions';
import { fetchDeleteWorkout, fetchWorkout } from './redux/actions';
// import SimpleAlert from './components/Alert';
import MainAlert from '../../shared/alert/MainAlert';

class WorkoutContainer extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    fetchDeleteWorkout: PropTypes.func.isRequired,
    checkedWorkouts: PropTypes.arrayOf(PropTypes.object).isRequired,
    setVisibleAlert: PropTypes.func.isRequired,
  };

  showAddWorkoutModal = () => {
    const modalProps = { isInitValue: false };

    this.props.showModal('WorkoutModal', modalProps);
  };

  deleteWorkout = () => {
    const workoutIds = this.props.checkedWorkouts.map(item => item._id);

    this.props.fetchDeleteWorkout(workoutIds);
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

  render() {
    return (
      <Container>
        <Row className="mb-3">
          <Col>
            <ButtonGroup>
              <AddButton
                type="button"
                className="mr-3"
                onClick={this.showAddWorkoutModal}
              >
                ADD
              </AddButton>
              <EditButton
                type="button"
                className="mr-3"
                onClick={this.showEditWorkoutModal}
              >
              EDIT
              </EditButton>
              <DeleteButton
                type="button"
                onClick={this.deleteWorkout}
              >
                DELETE
              </DeleteButton>
            </ButtonGroup>
          </Col>
          <Col>
            <MainAlert
              text="Select only one workout"
              styledProps={{ color: 'warning' }}
            />
          </Col>
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
  showModal,
  setVisibleAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);
