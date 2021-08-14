import { useContext } from "react";
import styled from "styled-components";
import ScheduleCandidate from "./ScheduleCandidate";
import { DateContext } from "../../pages/SchedulePage";
const MainContents = () => {
  const { date, setDate } = useContext(DateContext);
  const getValue = (e) => {
    setDate(e);
  };
  return (
    <MainContentsWrapper>
      {/* <CalenderBox /> */}
      <button onClick={() => getValue(20210708)}>20210708</button>
      <ScheduleCandidate date={date} />
    </MainContentsWrapper>
  );
};

const MainContentsWrapper = styled.div`
  display: flex;
`;

export default MainContents;
