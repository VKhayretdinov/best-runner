import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import SignIn from './components/SignIn';
import { fetchSignIn } from './redux/actions';
import { fetchCurrentUser } from '../App/Redux/actions';

class SignInContainer extends Component {
  static propTypes = {
    fetchSignIn: PropTypes.func.isRequired,
    fetchCurrentUser: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
    isLogged: PropTypes.bool.isRequired,
  };

  handleSignInFormSubmit = async (formValues) => {
    await this.props.fetchSignIn(formValues);

    this.props.fetchCurrentUser();
  };

  authInfo = () => {
    if (this.props.isError) return (<Alert>User not found.</Alert>);
    if (this.props.isLogged) return (<Alert>Success!</Alert>);

    return null;
  };

  render() {
    return (
      <Fragment>
        <Row className="justify-content-center">
          <Col xs={4}>
            <SignIn
              onSubmit={this.handleSignInFormSubmit}
              isError={this.props.isError}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={4}>
            {this.authInfo()}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: !!state.currentUser.data,
  isError: !!state.signIn.error,
});

const mapDispatchToProps = {
  fetchSignIn,
  fetchCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps )(withRouter(SignInContainer));
