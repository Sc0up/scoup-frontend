import styled from 'styled-components';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

export default function Calendar({
  calendarData,
  dateObj,
  scheduleData,
}: {
  calendarData: string[][];
  dateObj: Date;
  scheduleData: any;
}) {
  const getYearMonthText = (dateObj: Date) => {
    const yyyy = dateObj.getFullYear() + '';
    const realMonth = dateObj.getMonth() + 1;
    const mm = realMonth < 10 ? '0' + realMonth : realMonth + '';

    return `${yyyy}-${mm}`;
  };
  console.log(getYearMonthText(dateObj));

  return (
    <CalendarWrapper>
      <CalendarHeader dateObj={dateObj} />
      <CalendarBody
        calendarData={calendarData}
        scheduleData={scheduleData}
        yearMonth={getYearMonthText(dateObj)}
      />
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
