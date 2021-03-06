import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AddButton, LogOutButton, PrimaryButton } from '../../../../../shared/styledComponents/Button';
import TypesFilter from './TypesFilter';
import { ColumnControlPanel, InlineButtonsGroup } from '../styled';

const ControlPanel = ({
  handleAddWorkout, filterTypes, handleChange, handleLogOut,
}) => (
  <ColumnControlPanel>
    <InlineButtonsGroup>
      <AddButton
        type="button"
        onClick={handleAddWorkout}
      >
        ADD
      </AddButton>

      <PrimaryButton
        type="button"
      >
        <Link to="/charts" style={{ color: 'white', textDecoration: 'none' }}>CHARTS</Link>
      </PrimaryButton>

      <LogOutButton
        type="button"
        onClick={handleLogOut}
      >
        LOG OUT
      </LogOutButton>
    </InlineButtonsGroup>
    <TypesFilter types={filterTypes} onChange={handleChange} />
  </ColumnControlPanel>
);

ControlPanel.propTypes = {
  handleAddWorkout: PropTypes.func.isRequired,
  filterTypes: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

export default ControlPanel;
