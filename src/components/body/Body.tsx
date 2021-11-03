import styled from 'styled-components';
import {
  CALENDAR_AREA_HEADER_HEIGHT,
  GROUPLIST_WIDTH,
  HEADER_HEIGHT,
} from '../../style/constants';
import Calendars from '../calendar/Calendars';
import CalendarAreaHeader from './CalendarAreaHeader';
import GroupList from './groupList/GroupList';
import GroupScheduleList from './groupScheduleList/GroupScheduleList';

export default function Body() {
  return (
    <BodyContainer>
      <GroupList />
      <CalendarArea>
        <CalendarAreaHeader />
        <CalendarAreaBody>
          <Calendars />
          <GroupScheduleList />
        </CalendarAreaBody>
      </CalendarArea>
    </BodyContainer>
  );
}

const BodyContainer = styled.main`
  display: flex;
  width: 100%;
  /* Header 높이만큼 뺀 값 */
  height: calc(100vh - ${HEADER_HEIGHT}px);
`;

const CalendarArea = styled.section`
  /* 왼쪽 GroupList 넓이만큼 뺀 값 */
  width: calc(100% - ${GROUPLIST_WIDTH}px);
`;

const CalendarAreaBody = styled.div`
  width: 100%;
  /* CalendarAreaHeader 높이만큼 뺌 */
  height: calc(100% - ${CALENDAR_AREA_HEADER_HEIGHT}px);
  position: relative;
  overflow: hidden;
`;
