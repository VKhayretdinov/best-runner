import { FaEdit, FaTrashAlt, FaTimes, FaSort, FaEye } from 'react-icons/fa';
import styled from 'react-emotion';

const UpdateHoverColor = '#10c9ff';
const DeleteHoverColor = '#ff301f';
const NormalHoverColor = '#1e7fff';

export const UpdateIcon = styled(FaEdit)`
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

export const ViewIcon = styled(FaEye)`
  margin-left: 1em;
  &:hover {
    cursor: pointer;
    color: ${NormalHoverColor};
  }
`;

export const SortIcon = styled(FaSort)`
  &:hover {
    cursor: pointer;
    color: ${NormalHoverColor};
  }
`;

export const ResetSortIcon = styled(FaTimes)`
  &:hover {
    cursor: pointer;
  }
`;
