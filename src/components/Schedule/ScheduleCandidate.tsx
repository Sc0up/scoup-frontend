import styled from "styled-components";
import SelectSchedule from "./SelectSchedule";

const ScheduleCandidate = () => {
  return (
    <ScheduleCandidateWrapper>
      <Title>시간설정</Title>
      <SelectSchedule />
      <SelectedSchedule></SelectedSchedule>
    </ScheduleCandidateWrapper>
  );
};

const Title = styled.div`
  font-size: 30px;
`;
const SelectedSchedule = styled.div``;
const ScheduleCandidateWrapper = styled.div`
  padding: 10px;
  width: 400px;
  height: 700px;
  background-color: beige;
`;

export default ScheduleCandidate;
