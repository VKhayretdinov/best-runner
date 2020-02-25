import { createSelector } from 'reselect';

const getWorkouts = state => state.workouts;
const getSortBy = state => state.sortedBy;
const getDirection = state => state.direction;
const getFilters = state => state.workoutsFilters;

const sort = (workouts, sortBy, direction) => {
  if (direction === 'asc') return workouts.sort((cur, next) => (cur[sortBy] > next[sortBy] ? 1 : -1));

  return workouts.sort((cur, next) => (cur[sortBy] > next[sortBy] ? -1 : 1));
};

const filter = (data, filters) => {
  if (filters.length === 0) return data;

  return data.filter(workout => filters.includes(workout.type));
};

const makeWorkouts = (workouts, sortBy, direction, filters) => {
  switch (sortBy) {
    case 'date':
      return sort(workouts, sortBy, direction);
    case 'distance':
      return sort(workouts, sortBy, direction);
    case 'types':
      return filter(workouts, filters);
    default:
      return workouts;
  }
};

const sortedWorkoutsSelector = createSelector(
  [getWorkouts, getSortBy, getDirection, getFilters],
  // eslint-disable-next-line no-undef
  (workouts, sortBy, direction, filters) => makeWorkouts(
    [...workouts],
    sortBy,
    direction,
    filters,
  ),
);

export default sortedWorkoutsSelector;
