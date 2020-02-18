import { Label } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';

const LabelCheckBox = ({ text, className, onChange }) => (
  <Label className={className} onChange={onChange}>
    <input type="checkbox" name={text} />
    {text}
  </Label>
);

LabelCheckBox.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelCheckBox;
