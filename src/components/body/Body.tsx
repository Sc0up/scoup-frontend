import styled from 'styled-components';
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
  height: 100vh;
  background-color: #ffdcce;
`;

const CalendarArea = styled.section`
  width: 100%;
`;

const CalendarAreaBody = styled.div`
  width: 100%;
  /* CalendarAreaHeader 높이만큼 뺌 */
  height: calc(100% - 64px);
  position: relative;
  overflow: hidden;
`;
