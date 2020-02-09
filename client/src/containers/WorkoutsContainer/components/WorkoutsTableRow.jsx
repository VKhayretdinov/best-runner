import React from 'react';
import PropTypes from 'prop-types';
import { UpdateIcon, DeleteIcon, ViewIcon } from '../styled/icons';
import { Workout } from '../../../shared/prop-types';

const WorkoutTablesRow = ({
  workout, handleDelete, handleUpdate, handleView,
}) => {
  const {
    date, type, distance, id,
  } = workout;

  return (
    <tr>
      <td>{date}</td>
      <td>{type}</td>
      <td>{distance}</td>
      <td>
        <UpdateIcon workout-id={id} onClick={handleUpdate} />
        <DeleteIcon workout-id={id} onClick={handleDelete} />
        <ViewIcon workout-id={id} onClick={handleView} />
      </td>
    </tr>
  );
};

WorkoutTablesRow.propTypes = {
  workout: Workout.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
};

export default WorkoutTablesRow;
