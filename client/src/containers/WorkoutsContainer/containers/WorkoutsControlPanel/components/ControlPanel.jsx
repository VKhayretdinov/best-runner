import React from 'react';
import PropTypes from 'prop-types';
import { AddButton, LogOutButton } from '../../../../../shared/styledComponents/Button';
import TypesFilter from './TypesFilter';
import { InlineControlPanel } from '../styled';

const ControlPanel = ({
  handleAddWorkout, filterTypes, handleChange, handleLogOut,
}) => (
  <InlineControlPanel>
    <AddButton
      type="button"
      onClick={handleAddWorkout}
    >
        ADD
    </AddButton>

    <TypesFilter types={filterTypes} onChange={handleChange} />

    <LogOutButton
      type="button"
      onClick={handleLogOut}
    >
        LOG OUT
    </LogOutButton>

  </InlineControlPanel>
);

ControlPanel.propTypes = {
  handleAddWorkout: PropTypes.func.isRequired,
  filterTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

export default ControlPanel;
