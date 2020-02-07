import { get, post } from './base';
import { apiUrl } from './base/axios';

export default {
  all: () => get(`${apiUrl}/workout/all`),
  create: workout => post(`${apiUrl}/workout/create`, workout),
  delete: workoutId => post(`${apiUrl}/workout/delete`, workoutId),
  update: workout => post(`${apiUrl}/workout/update`, workout),
};
