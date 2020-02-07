import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import WorkoutsTableRow from './WorkoutsTableRow';
import { WorkoutsArray } from '../../../shared/prop-types';

const fetchRows = (workouts, handleDelete, handleUpdate) => workouts.map(workout =>
  (<WorkoutsTableRow
    key={workout.id}
    workout={workout}
    handleDelete={handleDelete}
    handleUpdate={handleUpdate}
  />));

const WorkoutsTable = ({ workouts, handleDelete, handleUpdate }) => (
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
      {fetchRows(workouts, handleDelete, handleUpdate)}
    </tbody>
  </Table>
);

WorkoutsTable.propTypes = {
  workouts: WorkoutsArray.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default WorkoutsTable;
