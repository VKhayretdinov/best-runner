import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AddButton } from '../../../../../shared/styledComponents/Button';
import TypesFilter from './TypesFilter';

const ControlPanel = ({
  handleAddWorkout, filterTypes, handleChange,
}) => (
  <Fragment>
    <AddButton
      type="button"
      className="mr-3"
      onClick={handleAddWorkout}
    >
        ADD
    </AddButton>
    <TypesFilter types={filterTypes} onChange={handleChange} />
  </Fragment>
);

ControlPanel.propTypes = {
  handleAddWorkout: PropTypes.func.isRequired,
  filterTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ControlPanel;
