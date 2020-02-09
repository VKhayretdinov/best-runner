import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import SignUp from './components/SignUp';
import { fetchSignUp } from './redux/actions';

class SignUpContainer extends Component {
  static propTypes = {
    fetchSignUp: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
  };

  handleSignUpFormSubmit = formValues => this.props.fetchSignUp(formValues);

  render() {
    return (
      <Fragment>
        <Row className="justify-content-center">
          <Col xs={4}>
            <SignUp
              onSubmit={this.handleSignUpFormSubmit}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={4}>
            {this.props.isError && (<Alert>Incorrect inputs.</Alert>)}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isError: !!state.signUp.error,
});

export default connect(mapStateToProps, { fetchSignUp })(SignUpContainer);
