import React from 'react';
import { Workout } from '../../../shared/types';

const WorkoutTablesRow = ({
  workout,
}) => {
  const {
    _id, date, type, distance,
  } = workout;

  return (
    <tr workout-id={_id}>
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
