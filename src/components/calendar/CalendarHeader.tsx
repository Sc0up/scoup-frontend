import styled from 'styled-components';
import { CALENDAR_HEADER_HEIGHT } from '../../style/constants';
import SolidArrow from '../common/icons/SolidArrow';

export default function CalendarHeader({ dateObj }: { dateObj: Date }) {
  return (
    <CalendarHeaderContainer>
      <SolidArrow direction="left" />
      <div className="year-month">
        {dateObj.getFullYear()}년 {dateObj.getMonth() + 1}월
      </div>
      <SolidArrow direction="right" />
    </CalendarHeaderContainer>
  );
}

const CalendarHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin-left: 16px;
  height: ${CALENDAR_HEADER_HEIGHT}px;

  .year-month {
    font-size: ${({ theme }) => theme.fontSize.S};
    font-weight: bold;
    margin: 0 12px;
  }
`;
