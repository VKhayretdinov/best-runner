import { FaEdit, FaTrashAlt, FaTimes, FaSort } from 'react-icons/fa';
import styled from 'react-emotion';

const UpdateHoverColor = '#10c9ff';
const DeleteHoverColor = '#ff301f';
const SortHoverColor = '#1e7fff';

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

export const SortIcon = styled(FaSort)`
  &:hover {
    cursor: pointer;
    color: ${SortHoverColor};
  }
`;

export const ResetSortIcon = styled(FaTimes)`
  &:hover {
    cursor: pointer;
  }
`;
