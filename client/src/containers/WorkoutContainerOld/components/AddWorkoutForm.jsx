import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'reactstrap';
import { Field } from 'redux-form';
import { CustomField, Select } from '../../../shared/redux-form-components';

const required = value => (value ? undefined : 'Required');

const AddWorkoutForm = ({ handleSubmit, onSubmit }) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <CustomField
      id="date"
      name="date"
      type="date"
      component={Input}
      placeholder="Date"
      label="Date"
      validate={[required]}
    />
    <Field
      name="type"
      id="type"
      component={Select}
      options={this.props.workoutOptions}
      validate={[required]}
    />
    <CustomField
      id="distance"
      name="distance"
      type="number"
      component={Input}
      placeholder="0"
      label="Distance"
      validate={[required]}
    />
    <Button
      type="submit"
      color="primary"
      className="mr-3"
    >
      Add
    </Button>
  </Form>
);

AddWorkoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  workoutOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AddWorkoutForm;