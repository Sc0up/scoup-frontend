import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Calendar from './Calendar';
import { getCalendarData } from './getCalendarData';
import { calendarsDataState, monthAtom, yearAtom } from './states';
import { Month } from './types';

export default function Calendars() {
  const [year, setYear] = useRecoilState(yearAtom);
  const [month, setMonth] = useRecoilState(monthAtom); // 인덱스임
  const calendarsData = useRecoilValue(calendarsDataState);
  console.log(calendarsData);
  let monthControl = -1;

  return (
    <ViewArea>
      <CalendarsContainer>
        {calendarsData.map((calendarData, i) => (
          <Calendar
            key={i}
            calendarData={calendarData}
            dateObj={new Date(year, month + monthControl++)}
          />
        ))}
      </CalendarsContainer>
    </ViewArea>
  );
}

const CalendarsContainer = styled.ul`
  all: unset;
  /* display: flex; */
  width: 3150px;
  transform: translateX(-1050px);
`;

const ViewArea = styled.div`
  width: 1050px;
  /* overflow: hidden; */
`;
