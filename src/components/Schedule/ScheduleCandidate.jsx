import styled from "styled-components";
import DefaultBox from "./DefaultBox";
import SelectSchedule from "./SelectSchedule";
import { useContext } from "react";
import { DateContext } from "../../pages/SchedulePage";

const ScheduleCandidate = () => {
  const { store } = useContext(DateContext);
  const { dateData } = store;
  const [date] = dateData;
  return (
    <ScheduleCandidateWrapper>
      <Title>시간설정</Title>
      {date && <SelectSchedule />}
      {!date && <DefaultBox />}
    </ScheduleCandidateWrapper>
  );
};
const Title = styled.div`
  font-size: 30px;
`;
const SelectedSchedule = styled.div``;
const ScheduleCandidateWrapper = styled.div`
  padding: 10px;
  width: 500px;
  height: 1000px;
  background-color: beige;
`;

export default ScheduleCandidate;
