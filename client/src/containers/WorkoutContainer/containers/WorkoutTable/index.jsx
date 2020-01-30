import React, { Component } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WorkoutTableRow from './components/WorkoutTableRow';
import {
  fetchWorkout,
  addCheckedWorkout,
  removeCheckedWorkout,
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

  handleCheckboxChange = (e) => {
    const checkbox = e.target;
    const workout = checkbox.getAttribute('name');
    if (checkbox.checked) {
      this.props.addCheckedWorkout(workout);
    } else {
      this.props.removeCheckedWorkout(workout);
    }
  }

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
                <th>Distance</th>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutTable);
