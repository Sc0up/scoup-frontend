import styled from 'styled-components';

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
  width: 150px;
  justify-content: center;
`;
