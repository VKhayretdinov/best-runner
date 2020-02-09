import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AddButton, LogOutButton } from '../../../../../shared/styledComponents/Button';
import TypesFilter from './TypesFilter';
import { ButtonsGroup } from '../styled';

const ControlPanel = ({
  handleAddWorkout, filterTypes, handleChange, handleLogOut,
}) => (
  <Fragment>
    <ButtonsGroup>
      <AddButton
        type="button"
        className="mr-3"
        onClick={handleAddWorkout}
      >
        ADD
      </AddButton>
      <LogOutButton
        type="button"
        className="mr-3"
        onClick={handleLogOut}
      >
        LOG OUT
      </LogOutButton>
    </ButtonsGroup>
    <TypesFilter types={filterTypes} onChange={handleChange} />
  </Fragment>
);

ControlPanel.propTypes = {
  handleAddWorkout: PropTypes.func.isRequired,
  filterTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

export default ControlPanel;
