import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import ChartForm from './ChartForm';

const ChartPanel = ({ handleSubmit, onSubmit }) => (
  <ChartForm
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
  />
);

ChartPanel.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'ChartForm',
})(ChartPanel);
