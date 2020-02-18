import React from 'react';
import { Form } from 'reactstrap';
import PropTypes from 'prop-types';
import LabelCheckBox from './LabelCheckBox';


const TypesFilter = ({ types, onChange }) => (
  <Form inline>
    {types().map(item => <LabelCheckBox className="mr-3" text={item} key={item} onChange={onChange} />)}
  </Form>
);

TypesFilter.propTypes = {
  types: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TypesFilter;
