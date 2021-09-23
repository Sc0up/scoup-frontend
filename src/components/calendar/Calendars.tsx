import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { CALENDAR_GAP } from '../../style/constants';
import Calendar from './Calendar';
import { calendarsDataState, monthAtom, yearAtom } from './states';

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

const ViewArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;

const CalendarsContainer = styled.ul`
  all: unset;
  /* gap: ${CALENDAR_GAP}px; */
  display: flex;
  width: calc(300% + ${CALENDAR_GAP * 2}px);
  height: 100%;
  transform: translateX(calc(-${100 / 3}%));
`;
