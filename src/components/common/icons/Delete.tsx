import styled from 'styled-components';
import { ReactComponent as DeleteSvg } from '../../../assets/images/icons/delete/delete-hover.svg';

export default function Delete() {
  return <DeleteIcon />;
}

const DeleteIcon = styled(DeleteSvg)`
  circle {
    fill: transparent;
  }
  line {
    fill: ${({ theme }) => theme.color.mono.black};
  }

  &:hover {
    circle {
      fill: ${({ theme }) => theme.color.mono.gray020};
    }

    cursor: pointer;
  }
`;
