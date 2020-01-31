import { get, post } from './base';
import { apiUrl } from './base/axios';

export default {
  getAll: () => get(`${apiUrl}/workout/all`),
  create: workout => post(`${apiUrl}/workout/add`, workout),
  delete: workout => post(`${apiUrl}/workout/delete`, workout),
  update: workout => post(`${apiUrl}/workout/update`, workout),
};
