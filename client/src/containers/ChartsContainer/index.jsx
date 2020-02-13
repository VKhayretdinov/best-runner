import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Col, Row } from 'reactstrap';
import { fetchWorkouts, createStructureDistance, renderWorkoutCharts } from './redux/actions';
import ChartWorkout from './components/ChartWorkout';
import ChartPanel from './components/ChartPanel';

class ChartsContainer extends Component {
  static propTypes = {
    fetchWorkouts: PropTypes.func.isRequired,
    workoutsType: PropTypes.arrayOf(PropTypes.string).isRequired,
    // sortedWorkouts:
  };

  componentWillMount() {
    this.props.fetchWorkouts();
  }

  structureDistance = (weeks) => {
    const distanceByTypes = {};

    this.props.workoutsType.forEach((type) => {
      distanceByTypes[type] = this.workoutsDistance(type, [...this.props.sortedWorkouts[type]], weeks);
    });

    return distanceByTypes;
  };

  workoutsDistance = (type, workoutsByType, weeks) => {
    const weeksAmount = Number(weeks);
    const end = moment();
    const start = end.startOf('week').subtract(weeksAmount - 1, 'weeks');

    const distanceByWeeks = [...Array(weeksAmount)].fill(0);

    for (let weekNumber = 0; weekNumber < weeksAmount; weekNumber += 1) {
      for (let i = workoutsByType.length - 1; i >= 0; i -= 1) {
        const workoutDate = moment(workoutsByType[i].date);

        const currWeek = start.clone().add(weekNumber, 'week');
        const nextWeek = currWeek.clone().add(1, 'week');

        if (workoutDate >= currWeek && workoutDate < nextWeek) {
          distanceByWeeks[weekNumber] += workoutsByType[i].distance;
          workoutsByType.splice(i, 1);
        }
      }
    }

    return distanceByWeeks;
  };

  handleShow = async (formValues) => {
    await this.props.renderWorkoutCharts(false);

    const { weeksAmount } = formValues;
    this.props.createStructureDistance(this.structureDistance(weeksAmount));
    this.props.renderWorkoutCharts(true);
  };

  getColumnLabels = (obj) => {
    let columnLabels = [];
    const keys = Object.keys(obj);

    const firstKeyValues = obj[keys[0]];

    if (keys.length) {
      columnLabels = firstKeyValues.map((type, index) => (index + 1));
    }

    return columnLabels;
  };

  showCharts = () => {
    const columnLabels = this.getColumnLabels(this.props.structuredDistance);

    return (
      this.props.workoutsType.map(type =>
        (<ChartWorkout
          chartLabel={type}
          columnLabels={columnLabels}
          dataset={this.props.structuredDistance[type]}
        />))
    );
  };

  render() {
    return (
      <Fragment>
        <Row className="justify-content-center">
          <Col>
            <ChartPanel onSubmit={this.handleShow} />
          </Col>
        </Row>
        <Row>
          <Col>
            {this.props.isRenderCharts && this.showCharts()}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sortedWorkouts: state.sortedWorkouts.workouts,
  structuredDistance: state.sortedWorkouts.structuredDistance,
  workoutsType: state.sortedWorkouts.workoutsType,
  isRenderCharts: state.sortedWorkouts.isRenderCharts,
});

const mapDispatchToProps = {
  fetchWorkouts,
  createStructureDistance,
  renderWorkoutCharts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);
