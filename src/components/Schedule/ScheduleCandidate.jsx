import styled from "styled-components";
import { useState } from "react";
import DefaultBox from "./DefaultBox";
import SelectSchedule from "./SelectSchedule";

const ScheduleCandidate = ({ date }) => {
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
  width: 40%;
  height: 1000px;
  background-color: beige;
`;

export default ScheduleCandidate;
