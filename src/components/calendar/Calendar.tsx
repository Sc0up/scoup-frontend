import styled from 'styled-components';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

export default function Calendar({
  calendarData,
  dateObj,
}: {
  calendarData: string[][];
  dateObj: Date;
}) {
  return (
    <CalendarWrapper>
      <CalendarHeader dateObj={dateObj} />
      <CalendarBody calendarData={calendarData} />
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  height: 100%;
  background-color: ${({ theme }) => theme.color.mono.gray010};
  box-sizing: border-box;
`;
