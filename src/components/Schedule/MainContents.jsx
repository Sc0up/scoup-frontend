import { useContext } from "react";
import styled from "styled-components";
import ScheduleCandidate from "./ScheduleCandidate";
import { DateContext } from "../../pages/SchedulePage";
const MainContents = () => {
  const { store } = useContext(DateContext);
  const { dateData } = store;
  const [, setDate] = dateData;
  const getValue = (e) => {
    setDate(e);
  };
  return (
    <MainContentsWrapper>
      {/* <CalenderBox /> */}
      <button onClick={() => getValue(20210708)}>20210708</button>
      <button onClick={() => getValue(20210710)}>20210710</button>
      <ScheduleCandidate />
    </MainContentsWrapper>
  );
};

const MainContentsWrapper = styled.div`
  display: flex;
`;

export default MainContents;
