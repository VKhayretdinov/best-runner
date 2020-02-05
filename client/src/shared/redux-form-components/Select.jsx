import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Input from 'reactstrap';

export default class ReduxformSelect extends Component {
  static propTypes = {
    input: PropTypes.shape({ onChange: PropTypes.func }).isRequired,
    children: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-prop-types
    options: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    options: null,
  };

  render() {
    const {
      children, input, options,
    } = this.props;

    return (
      <Fragment>
        {children}
        <Select
          clearable={false}
          searchable={false}
          options={options}
          {...input}
          onBlur={() => {}}
        />
      </Fragment>
    );
  }
}
