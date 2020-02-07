import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AddButton } from '../../../../../shared/styledComponents/Button';

const ControlPanel = ({
  handleAddWorkout,
}) => (
  <Fragment>
    <AddButton
      type="button"
      className="mr-3"
      onClick={handleAddWorkout}
    >
        ADD
    </AddButton>
  </Fragment>
);

ControlPanel.propTypes = {
  handleAddWorkout: PropTypes.func.isRequired,
};

export default ControlPanel;
