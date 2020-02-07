import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styled from 'react-emotion';

const UpdateHoverColor = '#10c9ff';
const DeleteHoverColor = '#ff301f';

export const UpdateIcon = styled(FaEdit)`
  margin-right: 1em;
  &:hover {
    cursor: pointer;
    color: ${UpdateHoverColor};
  }
`;

export const DeleteIcon = styled(FaTrashAlt)`
  margin-left: 1em;
  &:hover {
    cursor: pointer;
    color: ${DeleteHoverColor};
  }
`;
