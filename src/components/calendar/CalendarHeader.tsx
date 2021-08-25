import styled from 'styled-components';

export default function CalendarHeader({ dateObj }: { dateObj: Date }) {
  return (
    <CalendarHeaderContainer>
      <button>◀️</button>
      <div>
        {dateObj.getFullYear()}년 {dateObj.getMonth() + 1}월
      </div>
      <button>▶️</button>
    </CalendarHeaderContainer>
  );
}

const CalendarHeaderContainer = styled.header`
  display: flex;
`;
