import styled from 'styled-components';
import { CALENDAR_AREA_HEADER_HEIGHT } from '../../style/constants';

export default function CalendarAreaHeader() {
  return (
    <CalendarAreaHeaderContainer>
      <Left>
        <div className="title">Group Calendar</div>
        <ScheduleButtons>
          {/* 추후 이벤트핸들러, 아이콘, 텍스트, (컬러?)를 props로 받아서 렌더링하도록 변경 */}
          <ScheduleButton>일정 추가</ScheduleButton>
          <ScheduleButton>일정 목록</ScheduleButton>
          <ScheduleButton>일정 필터</ScheduleButton>
        </ScheduleButtons>
      </Left>
      <CalendarSettingButton />
    </CalendarAreaHeaderContainer>
  );
}

const CalendarAreaHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${CALENDAR_AREA_HEADER_HEIGHT}px;
  padding: 24px 18px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.M};
    font-weight: bold;
  }
`;

const ScheduleButtons = styled.div`
  margin-left: 16px;
  display: flex;
  gap: 16px;
`;

const ScheduleButton = styled.button`
  width: 120px;
  height: 36px;
  background-color: #c4c4c4;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const Right = styled.div``;

const CalendarSettingButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;
