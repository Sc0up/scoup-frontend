import styled from 'styled-components';
import Day from './Day';
import DayNames from './DayNames';

export default function CalendarBody({
  calendarData,
}: {
  calendarData: string[][];
}) {
  return (
    <CalendarBodyWrapper>
      <DayNames />
      {calendarData.map((week, i) => (
        <Week key={i}>
          {week.map((day, i) => (
            <Day key={i} day={day} />
          ))}
        </Week>
      ))}
    </CalendarBodyWrapper>
  );
}

const CalendarBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Week = styled.div`
  display: flex;
`;
