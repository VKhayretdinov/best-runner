import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import SignIn from './components/SignIn';
import { fetchSignIn } from './redux/actions';

class SignInContainer extends Component {
  static propTypes = {
    fetchSignIn: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleSignInFormSubmit = (formValues) => {
    this.props.fetchSignIn(formValues, this.props.history);
  };

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs={4}>
          <SignIn
            onSubmit={this.handleSignInFormSubmit}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: !!state.currentUser.data,
});

export default connect(mapStateToProps, { fetchSignIn })(withRouter(SignInContainer));
