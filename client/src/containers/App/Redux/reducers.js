import { reducer as reduxFormReducer } from 'redux-form';
import modalReducer from '../../../shared/modal/redux/reducer';
import signUpReducer from '../../SignUpContainer/redux/reducer';
import signInReducer from '../../SignInContainer/redux/reducer';
import currentUserReducer from './currentUserReducer';
import workoutReducer from '../../WorkoutsContainer/redux/reducer';
import controlPanelReducer from '../../WorkoutsContainer/containers/WorkoutsControlPanel/redux/reducer';
import sortedWorkoutReducer from '../../ChartsContainer/redux/reducer';

export default {
  form: reduxFormReducer,
  modal: modalReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  currentUser: currentUserReducer,
  workout: workoutReducer,
  controlPanel: controlPanelReducer,
  sortedWorkouts: sortedWorkoutReducer,
};
