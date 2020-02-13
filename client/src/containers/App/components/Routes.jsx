import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import SignUpContainer from '../../SignUpContainer/index';
import SignInContainer from '../../SignInContainer/index';
import PrivateRoute from './PrivateRoute';
import WorkoutsContainer from '../../WorkoutsContainer';
import ChartsContainer from '../../ChartsContainer';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={WorkoutsContainer} />
    <PrivateRoute path="/charts" component={ChartsContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/signin" component={SignInContainer} />
  </Switch>
);

export default hot(module)(Routes);
