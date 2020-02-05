import styled from 'react-emotion';
import { darken, lighten } from 'polished';

const primaryButtonColor = '#5FA1DB';
const cancelButtonColor = '#F3F3F3';
const addButton = '#00ac00';
const deleteButton = '#c80000';
const editButton = '#0000c8';

const PrimaryButton = styled.button`
  background-color: ${primaryButtonColor};
  border: none;
  color: white;
  border-radius: 4px;
  padding: 7px 12px;
  transition: 0.3s;
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
  
  &:not([disabled]) {
    cursor: pointer;
    
    &:hover, &:active, &:focus {
      background-color: ${darken(0.1, primaryButtonColor)};
    }
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const CancelButton = styled(PrimaryButton)`
  background-color: ${cancelButtonColor};
  
  &:not([disabled]) {
    &:hover, &:active, &:focus {
      background-color: ${darken(0.1, cancelButtonColor)};
    }
  }
`;

const AddButton = styled(PrimaryButton)`
  background-color: ${addButton};
  
  &:not([disabled]) {
    &:hover, &:active, &:focus {
      background-color: ${lighten(0.05, addButton)};
    }
  }
`;

const DeleteButton = styled(PrimaryButton)`
  background-color: ${deleteButton};
  
  &:not([disabled]) {
    &:hover, &:active, &:focus {
      background-color: ${lighten(0.1, deleteButton)};
    }
  }
`;

const EditButton = styled(PrimaryButton)`
  background-color: ${editButton};
  
  &:not([disabled]) {
    &:hover, &:active, &:focus {
      background-color: ${lighten(0.1, editButton)};
    }
  }
`;

export default PrimaryButton;

export {
  PrimaryButton,
  CancelButton,
  AddButton,
  DeleteButton,
  EditButton,
};