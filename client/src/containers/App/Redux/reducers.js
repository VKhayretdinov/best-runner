import { reducer as reduxFormReducer } from 'redux-form';
import modalReducer from '../../../shared/modal/redux/reducer';
import exampleReducer from '../../ExampleContrainer/redux/reducer';
import signUpReducer from '../../SignUpContainer/redux/reducer';
import signInReducer from '../../SignInContainer/redux/reducer';
import currentUserReducer from './currentUserReducer';
import workoutReducer from '../../WorkoutContainer/redux/reducer';
import alertReducer from '../../../shared/alert/redux/reducer';

export default {
  form: reduxFormReducer,
  modal: modalReducer,
  example: exampleReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  currentUser: currentUserReducer,
  workout: workoutReducer,
  alert: alertReducer,
};
