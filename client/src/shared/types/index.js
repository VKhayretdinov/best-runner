import PropTypes from 'prop-types';

export const Workout = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
});
