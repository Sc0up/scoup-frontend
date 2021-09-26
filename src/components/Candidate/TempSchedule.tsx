import styled from "styled-components";
import { useState } from "react";
import AddButton from "./AddButton";
import ScheduleCandidate from "./ScheduleCandidate";
import ScheduleSetting from "./ScheduleSetting";
import Settings from "./Settings";

export interface IRange {
  value: Date;
  title: string;
}
// export interface IObj {
//   id:
// }
const TempSchedule = () => {
  const date = new Date();
  const start = new Date();
  const end = new Date();
  end.setHours(date.getHours() + 1);
  const [dateRange, setDateRange] = useState<IRange[]>([
    { title: "시작", value: start },
    { title: "종료", value: end },
  ]);

  console.log(dateRange[0].value.getHours());
  return (
    <TempScheduleWrapper>
      <Settings dateRange={dateRange} setDateRange={setDateRange} />
      <ScheduleSetting />
      <ScheduleCandidate />
    </TempScheduleWrapper>
  );
};

const TempScheduleWrapper = styled.div`
  width: 618px;
`;

export default TempSchedule;
