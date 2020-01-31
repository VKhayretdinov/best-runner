import React, { Component } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WorkoutTableRow from './components/WorkoutTableRow';
import {
  fetchWorkout,
  addCheckedWorkout,
  removeCheckedWorkout,
  sortWorkoutsByDistance,
} from '../../redux/actions';

class WorkoutTable extends Component {
  static propTypes = {
    fetchWorkout: PropTypes.func.isRequired,
    workouts: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      date: PropTypes.string,
      type: PropTypes.string,
      distance: PropTypes.number,
      __v: PropTypes.number,
    })).isRequired,
    addCheckedWorkout: PropTypes.func.isRequired,
    removeCheckedWorkout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchWorkout();
  }

  handleClick = (e) => {

  }

  getWorkoutById = id => this.props.workouts.find(workout => workout._id === id);

  handleCheckboxChange = (e) => {
    const checkbox = e.target;
    const id = checkbox.getAttribute('name');
    const workout = this.getWorkoutById(id);

    if (checkbox.checked) {
      this.props.addCheckedWorkout(workout);
    } else {
      this.props.removeCheckedWorkout(workout);
    }
  };

  handleDistanceClick = () => {
    this.props.sortWorkoutsByDistance();
  };

  render() {
    const { workouts } = this.props;

    return (
      <Row>
        <Col className="justify-content-center">
          <Table dark hover bordered>
            <thead>
              <tr>
                <th>Select</th>
                <th>Date</th>
                <th>Type</th>
                <th onClick={this.handleDistanceClick}>Distance</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(item => (
                <WorkoutTableRow
                  distance={item.distance}
                  date={item.date}
                  type={item.type}
                  key={item._id}
                  postId={item._id}
                  onClick={this.handleClick}
                  onChange={this.handleCheckboxChange}
                />
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workout.workouts.workouts,
});

const mapDispatchToProps = {
  fetchWorkout,
  addCheckedWorkout,
  removeCheckedWorkout,
  sortWorkoutsByDistance,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutTable);
