import React from 'react';
import PropTypes from 'prop-types';

const WorkoutTableRow = ({
  date, type, distance, onClick, onChange, postId,
}) => (
  <tr onClick={onClick} postid={postId}>
    <td>
      <input type="checkbox" name={postId} onClick={onChange} />
    </td>
    <td>{date}</td>
    <td>{type}</td>
    <td>{distance}</td>
  </tr>
);

WorkoutTableRow.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['running', 'bike', 'walking', 'skiing']).isRequired,
  distance: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WorkoutTableRow;
