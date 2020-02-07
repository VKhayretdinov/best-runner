import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Workout } from '../../../shared/prop-types';

const WorkoutTablesRow = ({
  workout, handleDelete, handleUpdate,
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
        {/*<FaEdit workout-id={id} onClick={handleUpdate()} />*/}
        <FaTrashAlt workout-id={id} onClick={handleDelete} />
      </td>
    </tr>
  );
};

WorkoutTablesRow.propTypes = {
  workout: Workout.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default WorkoutTablesRow;
