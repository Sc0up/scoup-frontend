import styled from 'styled-components';
import { DAY_NAME_HEIGHT } from '../../style/constants';

export default function DayNames() {
  const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <DayNameContainer>
      {DAY_NAMES.map((dayName, i) => (
        <DayName key={i}>{dayName}</DayName>
      ))}
    </DayNameContainer>
  );
}

const DayNameContainer = styled.div`
  display: flex;
`;

const DayName = styled.div`
  display: flex;
  width: calc(100% / 7);
  height: ${DAY_NAME_HEIGHT}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary.p020};
  font-size: ${({ theme }) => theme.fontSize.S};
`;
