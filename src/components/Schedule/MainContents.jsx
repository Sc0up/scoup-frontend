import { useContext } from "react";
import styled from "styled-components";
import ScheduleCandidate from "./ScheduleCandidate";
import { DateContext } from "../../pages/SchedulePage";
const MainContents = () => {
  // date1.setMinutes(30);
  // let date2 = new D
  // const obj = {
  //   date:{year, month, date}
  //   start: {hours, minutes}
  //   end:{hours, minutes}
  // }
  // console.log(date1);
  const { store } = useContext(DateContext);
  const { dateData } = store;
  const [date, setDate] = dateData;
  const getValue = (year, month, date) => {
    let date1 = new Date(year, month, date, 11, 0);
    let date2 = new Date(year, month, date, 13, 30);
    setDate((info) => {
      let newObj = { ...info };
      newObj.date = {
        year: date1.getFullYear(),
        month: date1.getMonth(),
        date: date1.getDate(),
      };
      newObj.start = {
        hours: date1.getHours(),
        minutes: date1.getMinutes(),
      };
      newObj.end = {
        hours: date2.getHours(),
        minutes: date2.getMinutes(),
      };
      // newObj.end = date2;
      return newObj;
    });
    // setDate();
  };
  return (
    <MainContentsWrapper>
      {/* <CalenderBox /> */}
      <button onClick={() => getValue(2021, 7, 8)}>20210708</button>
      <button onClick={() => getValue(2021, 7, 10)}>20210710</button>
      <ScheduleCandidate />
    </MainContentsWrapper>
  );
};

const MainContentsWrapper = styled.div`
  display: flex;
`;

export default MainContents;
