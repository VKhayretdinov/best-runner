import exampleApi from './api/exampleApi';
import authApi from './api/authApi';
import userApi from './api/userApi';
import workoutApi from './api/workoutApi';

const api = {
  example: exampleApi,
  auth: authApi,
  user: userApi,
  workout: workoutApi,
};

export default api;
