import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import WorkoutsTableRow from './WorkoutsTableRow';
import { Workout } from '../../../shared/types';

const fetchRows = workouts => workouts.map(workout => <WorkoutsTableRow workout={workout} />);

const WorkoutsTable = ({ workouts }) => (
  <Table dark hover bordered>
    <thead>
      <th>Date</th>
      <th>Type</th>
      <th>Distance</th>
      <th>Action</th>
    </thead>
    <tbody>
      {fetchRows(workouts)}
    </tbody>
  </Table>
);

WorkoutsTable.propTypes = {
  workouts: PropTypes.arrayOf(Workout).isRequired,
};

export default WorkoutsTable;
