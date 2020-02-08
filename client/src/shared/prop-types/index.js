import PropTypes from 'prop-types';

export const Workout = PropTypes.shape({
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  comment: PropTypes.string,
});

export const WorkoutsArray = PropTypes.arrayOf(Workout);

export const WorkoutSelectOptions = PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}));
