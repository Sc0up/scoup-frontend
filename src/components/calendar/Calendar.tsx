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
`;
