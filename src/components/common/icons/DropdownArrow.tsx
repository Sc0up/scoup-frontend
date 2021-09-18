import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as DropdownArrowUpSvg } from '../../../assets/images/icons/dropdown/dropdown-up-hover.svg';
import { ReactComponent as DropdownArrowDownSvg } from '../../../assets/images/icons/dropdown/dropdown-down-hover.svg';

type Direction = 'up' | 'down';

export default function DropdownArrow() {
  const [direction, setDirection] = useState<Direction>('down');

  const handleArrowDirection = () => {
    if (direction === 'up') setDirection('down');
    if (direction === 'down') setDirection('up');
  };

  return (
    <>
      {direction === 'up' ? (
        <DropdownArrowUp onClick={handleArrowDirection} />
      ) : (
        <DropdownArrowDown onClick={handleArrowDirection} />
      )}
    </>
  );
}

const DropdownArrowUp = styled(DropdownArrowUpSvg)`
  circle {
    fill: transparent;
  }
  path {
    fill: ${({ theme }) => theme.color.mono.black};
  }

  &:hover {
    circle {
      fill: ${({ theme }) => theme.color.mono.gray020};
    }

    cursor: pointer;
  }
`;

const DropdownArrowDown = styled(DropdownArrowDownSvg)`
  circle {
    fill: transparent;
  }
  path {
    fill: ${({ theme }) => theme.color.mono.black};
  }

  &:hover {
    circle {
      fill: ${({ theme }) => theme.color.mono.gray020};
    }

    cursor: pointer;
  }
`;
