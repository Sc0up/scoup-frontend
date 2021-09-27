import styled from 'styled-components';
import { CALENDAR_HEADER_HEIGHT } from '../../style/constants';
import Day from './Day';
import DayNames from './DayNames';

export default function CalendarBody({
  calendarData,
  scheduleData,
  yearMonth,
}: {
  calendarData: string[][];
  scheduleData: any;
  yearMonth: string;
}) {
  console.log('🌱 ', calendarData);

  return (
    <CalendarBodyWrapper>
      <DayNames />
      {calendarData.map((week, i) => (
        <Week key={i}>
          {week.map((day, i) => {
            let formattedDay = +day < 10 ? '0' + day : day;
            if (day === '') formattedDay = i + day;
            const dayKey = `${yearMonth}-${formattedDay}`;
            const { [dayKey]: schedulesOnDay } = scheduleData;
            return (
              <Day key={dayKey} day={day} schedulesOnDay={schedulesOnDay} />
            );
          })}
        </Week>
      ))}
    </CalendarBodyWrapper>
  );
}

const CalendarBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* CalendarHeader (OOOO년 O월 부분) 높이만큼 뺀 값 */
  height: calc(100% - ${CALENDAR_HEADER_HEIGHT}px);
  background-color: ${({ theme }) => theme.color.mono.white};
`;

const Week = styled.div`
  display: flex;
  width: 100%;
  /* height는 추후 props로 week의 개수를 받아 처리해야 함 */
  height: calc(100% / 5);
`;
