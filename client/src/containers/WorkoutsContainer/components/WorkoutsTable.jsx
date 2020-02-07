import React from 'react';
import { Table } from 'reactstrap';
import WorkoutsTableRow from './WorkoutsTableRow';
import { WorkoutsArray } from '../../../shared/prop-types';

const fetchRows = workouts => workouts.map(workout => <WorkoutsTableRow key={workout.id} workout={workout} />);

const WorkoutsTable = ({ workouts }) => (
  <Table dark hover bordered>
    <thead>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Distance</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {fetchRows(workouts)}
    </tbody>
  </Table>
);

WorkoutsTable.propTypes = {
  workouts: WorkoutsArray.isRequired,
};

export default WorkoutsTable;
