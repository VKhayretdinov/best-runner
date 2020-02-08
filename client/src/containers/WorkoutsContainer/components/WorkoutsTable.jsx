import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import WorkoutsTableRow from './WorkoutsTableRow';
import { WorkoutsArray } from '../../../shared/prop-types';
import { SortIcon, ResetSortIcon } from '../styled/icons';

const fetchRows = (workouts, handleDelete, handleUpdate) => workouts.map(workout =>
  (<WorkoutsTableRow
    key={workout.id}
    workout={workout}
    handleDelete={handleDelete}
    handleUpdate={handleUpdate}
  />));

const showResetIcon = (sortedBy, columnName, handleReset) => (
  sortedBy === columnName ? <ResetSortIcon onClick={handleReset} /> : null
);

const WorkoutsTable = ({
  workouts, handleDelete, handleUpdate, handleSort, sortedBy, handleReset,
}) => (
  <Table dark hover bordered>
    <thead>
      <tr>
        <th>
          Date
          <SortIcon onClick={() => handleSort('date')} />
          {showResetIcon(sortedBy, 'date', handleReset)}
        </th>
        <th>Type</th>
        <th>
          Distance
          <SortIcon onClick={() => handleSort('distance')} />
          {showResetIcon(sortedBy, 'distance', handleReset)}
        </th>
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
  sortedBy: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default WorkoutsTable;
