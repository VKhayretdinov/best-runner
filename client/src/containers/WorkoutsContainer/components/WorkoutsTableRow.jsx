import React from 'react';
import { Workout } from '../../../shared/prop-types';

const WorkoutTablesRow = ({
  workout,
}) => {
  const {
    date, type, distance, id,
  } = workout;

  return (
    <tr workout-id={id}>
      <td>{date}</td>
      <td>{type}</td>
      <td>{distance}</td>
      <td>icons</td>
    </tr>
  );
};

WorkoutTablesRow.propTypes = {
  workout: Workout.isRequired,
};

export default WorkoutTablesRow;
