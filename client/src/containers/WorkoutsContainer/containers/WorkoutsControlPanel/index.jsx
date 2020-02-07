import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ControlPanel from './components/ControlPanel';
import { showModal } from '../../../../shared/modal/redux/actions';

class WorkoutsControlPanel extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
  };

  handleAddWorkout = () => {
    this.props.showModal('WorkoutModal');
  };

  render() {
    return (
      <ControlPanel
        handleAddWorkout={this.handleAddWorkout}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsControlPanel);
