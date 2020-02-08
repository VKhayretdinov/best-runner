import React, { Fragment } from 'react';
import { ButtonGroup, Col, Label, Input } from 'reactstrap';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { AddButton, DeleteButton, EditButton } from '../../../../../shared/styledComponents/Button';
import MainAlert from '../../../../../shared/alert/MainAlert';
import TypesFilter from '../../../../WorkoutsContainer/containers/WorkoutsControlPanel/components/TypesFilter';

const Header = ({
  showAddWorkoutModal, showEditWorkoutModal, deleteWorkout, workoutTypes, onChange,
}) => (
  <Fragment>
    <Col>
      <ButtonGroup>
        <AddButton
          type="button"
          className="mr-3"
          onClick={showAddWorkoutModal}
        >
          ADD
        </AddButton>
        <EditButton
          type="button"
          className="mr-3"
          onClick={showEditWorkoutModal}
        >
          EDIT
        </EditButton>
        <DeleteButton
          type="button"
          onClick={deleteWorkout}
        >
          DELETE
        </DeleteButton>
      </ButtonGroup>
    </Col>
    <Col>
      <TypesFilter types={workoutTypes} onChange={onChange} />
    </Col>
    <Col>
      <MainAlert
        text="Select only one workout"
        styledProps={{ color: 'warning' }}
      />
    </Col>
  </Fragment>
);

Header.propTypes = {
  showAddWorkoutModal: PropTypes.func.isRequired,
  showEditWorkoutModal: PropTypes.func.isRequired,
  deleteWorkout: PropTypes.func.isRequired,
  workoutTypes: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Header;
