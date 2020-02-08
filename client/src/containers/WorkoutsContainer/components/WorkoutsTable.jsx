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

const WorkoutsTable = ({
  workouts, handleDelete, handleUpdate, handleSort,
}) => (
  <Table dark hover bordered>
    <thead>
      <tr>
        <th onClick={() => handleSort('date')}>Date</th>
        <th>Type</th>
        <th onClick={() => handleSort('distance')}>Distance</th>
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
  handleSort: PropTypes.func.isRequired,
};

export default WorkoutsTable;
