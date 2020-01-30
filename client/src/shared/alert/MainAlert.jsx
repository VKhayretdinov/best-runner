import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { setVisibleAlert } from './redux/actions';

class MainAlert extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    setVisibleAlert: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    styledProps: PropTypes.shape(PropTypes.object),
  };

  static defaultProps = {
    styledProps: {},
  }

  handleCloseAlert = () => {
    this.props.setVisibleAlert(false);
  };

  render() {
    return (
      <Alert
        isOpen={this.props.isVisible}
        toggle={this.handleCloseAlert}
        {...this.props.styledProps}
      >
        {this.props.text}
      </Alert>
    );
  }
}

const mapStateToProps = state => ({
  isVisible: state.alert.isVisible,
});

const mapDispatchToProps = { setVisibleAlert };

export default connect(mapStateToProps, mapDispatchToProps)(MainAlert);
