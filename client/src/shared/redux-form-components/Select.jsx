import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const ReduxFormSelect = (props) => {
  const {
    input, options,
  } = props;

  return (
    <Select
      clearable={false}
      searchable={false}
      options={options}
      {...input}
      onBlur={() => {
          }}
    />
  );
};

ReduxFormSelect.propTypes = {
  input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
  children: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-prop-types,react/forbid-prop-types
  options: PropTypes.array,
};

ReduxFormSelect.defaultProps = {
  children: null,
  options: null,
};

export default ReduxFormSelect;
