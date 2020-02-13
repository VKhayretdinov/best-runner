import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Input,
} from 'reactstrap';
import { CustomField } from '../../../shared/redux-form-components';

const ChartForm = ({ handleSubmit, onSubmit }) => (
  <Form inline onSubmit={handleSubmit(onSubmit)}>
    <CustomField
      id="weeksAmount"
      name="weeksAmount"
      type="number"
      label=""
      component={Input}
      placeholder="Last 0 (weeks)"
      min={1}
      className="m-1"
    />
    <Button
      type="submit"
      color="primary"
    >
      Show
    </Button>
  </Form>
);

ChartForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ChartForm;
