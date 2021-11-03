import styled from "styled-components";
import { createContext, useState } from "react";
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
export interface ITemp {
  start: Date;
  end: Date;
}
export interface ITempContent {
  tempCandidate: any;
  setTempCandidate: (c: any) => void;
}
export const TempContext = createContext<ITempContent>({
  tempCandidate: [],
  setTempCandidate: () => {},
});
const TempSchedule = () => {
  const date = new Date();
  const end = new Date();
  const start = new Date();
  const lastDate = new Date(date.getFullYear(), start.getMonth(), 0);
  const [tempCandidate, setTempCandidate] = useState([]);
  const findSum = (a: string, b: string) => {
    return a + b;
  };
  return (
    <TempContext.Provider value={{ tempCandidate, setTempCandidate }}>
      <TempScheduleWrapper>
        <Settings />
        {/* <ScheduleSetting /> */}
        <ScheduleCandidate />
      </TempScheduleWrapper>
    </TempContext.Provider>
  );
};

const TempScheduleWrapper = styled.div`
  width: 618px;
`;

export default TempSchedule;
