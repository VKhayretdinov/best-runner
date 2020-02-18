import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'reactstrap';
import { Field } from 'redux-form';
import { CustomField, Select } from '../../../../../shared/redux-form-components';
import { WorkoutSelectOptions } from '../../../../../shared/prop-types';

const required = value => (value ? undefined : 'Required');
const requiredSelect = select => (select.value ? undefined : 'Required');
const positiveNumber = value => (Number(value) > 0 ? undefined : 'Enter positive number');

const WorkoutForm = ({
  handleSubmit, onSubmit, options,
}) => (
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
      options={options}
      validate={[requiredSelect]}
    />
    <CustomField
      id="distance"
      name="distance"
      type="number"
      component={Input}
      placeholder="0"
      label="Distance"
      validate={[required, positiveNumber]}
    />
    <CustomField
      id="comment"
      name="comment"
      component={Input}
      placeholder="Comment..."
      label="Comment"
    />
    <Button
      type="submit"
      color="primary"
      className="mr-3"
    >
      Confirm
    </Button>
  </Form>
);

WorkoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  options: WorkoutSelectOptions.isRequired,
};

export default WorkoutForm;
