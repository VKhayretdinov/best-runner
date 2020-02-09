import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import SignIn from './components/SignIn';
import { fetchSignIn } from './redux/actions';

class SignInContainer extends Component {
  static propTypes = {
    fetchSignIn: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    isError: PropTypes.bool.isRequired,
  };

  handleSignInFormSubmit = (formValues) => {
    this.props.fetchSignIn(formValues, this.props.history);
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
            {this.props.isError && (<Alert>User not found.</Alert>)}
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

export default connect(mapStateToProps, { fetchSignIn })(withRouter(SignInContainer));
