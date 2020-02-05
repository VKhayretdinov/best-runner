import { Input, Label } from 'reactstrap';
import React from 'react';

const LabelCheckBox = ({text, className, onChange}) => (
  <Label className={className} check>
    <Input type="checkbox" name={text} onChange={onChange} />
    {text}
  </Label>
);

export default LabelCheckBox;
