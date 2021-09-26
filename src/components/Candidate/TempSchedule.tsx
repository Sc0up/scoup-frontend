import styled from "styled-components";
import { useState } from "react";
import AddButton from "./AddButton";
import ScheduleCandidate from "./ScheduleCandidate";
import ScheduleSetting from "./ScheduleSetting";
import Settings from "./Settings";

export interface IRange {
  value: Date;
  title: string;
  years: number[];
  months: number[];
  dates: number[];
  time: string;
}
// export interface IObj {
//   id:
// }
const TempSchedule = () => {
  const date = new Date();
  const start = new Date();
  const end = new Date();
  const lastDate = new Date(start.getFullYear(), start.getMonth(), 0);
  end.setHours(date.getHours() + 1);
  // const [dateRange, setDateRange] = useState<IRange[]>([
  const [startDate, setStartDate] = useState<Date>(start);
  const [endDate, setEndDate] = useState<Date>(end);
  // console.log(dateRange);

  // console.log(dateRange[0].value.getHours());
  return (
    <TempScheduleWrapper>
      <Settings
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <ScheduleSetting />
      <ScheduleCandidate />
    </TempScheduleWrapper>
  );
};

const TempScheduleWrapper = styled.div`
  width: 618px;
`;

export default TempSchedule;
