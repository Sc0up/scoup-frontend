import { AnyMxRecord } from "dns";
import { ChangeEvent, Dispatch, useState } from "react";
import styled from "styled-components";
import EndDate from "./EndDate";
import StartDate from "./StartDate";
import { IRange } from "./TempSchedule";
// import { IRange } from "./TempSchedule";

export interface ISettings {
  startDate: Date;
  endDate: Date;
  setStartDate: Dispatch<Date>;
  setEndDate: Dispatch<Date>;
}
export interface IDateOption {
  title: string;
  year: number[];
  month: number[];
  date: number[];
}
const Settings = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: ISettings) => {
  const lastDate = new Date(startDate.getFullYear(), startDate.getMonth(), 0);
  const [startOptions, setStartOptions] = useState({
    years: Array.from(
      new Array(20),
      (val, index) => index + startDate.getFullYear()
    ),
    months: Array.from(
      { length: 12 - startDate.getMonth() },
      (_, i) => i + startDate.getMonth() + 1
    ),
    dates: Array.from(
      { length: lastDate.getDate() - startDate.getDate() },
      (_, i) => i + startDate.getDate()
    ),
  });
  const [endOptions, setEndOptions] = useState({
    years: Array.from(
      new Array(20),
      (val, index) => index + endDate.getFullYear()
    ),
    months: Array.from(
      { length: 12 - endDate.getMonth() },
      (_, i) => i + endDate.getMonth() + 1
    ),
    dates: Array.from(
      { length: lastDate.getDate() - endDate.getDate() },
      (_, i) => i + endDate.getDate()
    ),
  });
  const handleDate = (e: any) => {
    let curr = e.target.value;
    // setDateRange(
    //   dateRange.map((e) => {
    //     console.log(e.value);
    //     e.value.setFullYear(curr);
    //     return e;
    //   })
    // );
  };

  return (
    <SettingsWrapper>
      <Title>일정 설정</Title>
      <Container>
        <ListWrapper>
          <StartDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <EndDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </ListWrapper>
        <Btn>후보추가</Btn>
      </Container>
    </SettingsWrapper>
  );
};
const ListWrapper = styled.div``;
const Str = styled.div`
  padding: 5px;
`;
const Each = styled.div`
  display: flex;
`;
const YearBox = styled.div``;
const MonthBox = styled.div``;
const DateBox = styled.div``;

const LineTitle = styled.div`
  font-size: 20px;
  background-color: gray;
  padding: 5px;
  margin: 5px 0;
`;
const LineContent = styled.div`
  display: flex;
  background-color: gray;
  width: 363px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 5px 20px;
  padding: 5px;
`;
const Line = styled.div`
  display: flex;
`;
const Title = styled.div`
  height: 41px;
  background-color: #f0f2f5;
  font-size: 25px;
  font-weight: 600;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  margin-bottom: 30px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Btn = styled.button`
  font-size: 20px;
  font-weight: 600;
  width: 94px;
  height: 38px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
`;
const SettingsWrapper = styled.div``;
export default Settings;
