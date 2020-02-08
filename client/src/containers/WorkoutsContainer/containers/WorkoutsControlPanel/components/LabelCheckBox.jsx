import { Input, Label } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const LabelCheckBox = ({ text, className, onChange }) => (
  <Label className={className} check>
    <Input type="checkbox" name={text} onChange={onChange} />
    {text}
  </Label>
);

LabelCheckBox.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelCheckBox;
