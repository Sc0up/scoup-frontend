import styled from 'styled-components';

export default function GroupScheduleList() {
  return (
    <GroupScheduleListContainer>
      <GroupScheduleListHeader>
        <div className="title">Group schedule List</div>
        <button className="arrow-icon">►</button>
      </GroupScheduleListHeader>
    </GroupScheduleListContainer>
  );
}

const GroupScheduleListContainer = styled.aside`
  position: absolute;
  width: 486px;
  height: 100%;
  background-color: #fcfcfc;
  top: 0;
  right: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GroupScheduleListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 28px;
  background-color: #74c9f8;

  .title {
    font-weight: bold;
    font-size: 24px;
  }
`;
