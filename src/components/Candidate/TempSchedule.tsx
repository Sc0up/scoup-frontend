import styled from "styled-components";
import AddButton from "./AddButton";
import ScheduleCandidate from "./ScheduleCandidate";
import ScheduleSetting from "./ScheduleSetting";

const TempSchedule = () => {
  return (
    <TempScheduleWrapper>
      <ScheduleSetting />
      <ScheduleCandidate />
    </TempScheduleWrapper>
  );
};

const TempScheduleWrapper = styled.div``;

export default TempSchedule;
