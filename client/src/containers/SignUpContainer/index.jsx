import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import SignUp from './components/SignUp';
import { fetchSignUp } from './redux/actions';

class SignUpContainer extends Component {
  static propTypes = {
    fetchSignUp: PropTypes.func.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string),
    isRegister: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    errors: null,
  };

  handleSignUpFormSubmit = formValues => this.props.fetchSignUp(formValues);

  singUpInfo = () => {
    if (this.props.errors) return (this.props.errors.map(error => (<Alert key={error}>{error}</Alert>)));
    if (this.props.isRegister) return (<Alert>Registration completed!</Alert>);

    return null;
  };

  render() {
    return (
      <Fragment>
        <Row className="justify-content-center">
          <Col sm={6} md={4}>
            <SignUp
              onSubmit={this.handleSignUpFormSubmit}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col sm={6} md={4}>
            {this.singUpInfo()}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.signUp.error,
  isRegister: state.signUp.isRegister,
});

export default connect(mapStateToProps, { fetchSignUp })(SignUpContainer);
