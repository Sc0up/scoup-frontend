import { Dispatch, useState } from "react";
import styled from "styled-components";
import { IRange } from "./TempSchedule";
// import { IRange } from "./TempSchedule";

interface ISettings {
  dateRange: IRange[];
  setDateRange: Dispatch<IRange[]>;
}
interface IDateOption {
  title: string;
  year: number[];
  month: number[];
  date: number[];
}
const Settings = ({ dateRange, setDateRange }: ISettings) => {
  const lastDate = new Date(
    dateRange[0].value.getFullYear(),
    dateRange[0].value.getMonth() + 1,
    0
  );
  console.log(lastDate);
  console.log(dateRange[0].value.getFullYear());

  const [dateOption, setDateOption] = useState<IDateOption[]>([
    {
      title: "시작",
      year: Array.from(
        new Array(20),
        (val, index) => index + dateRange[0].value.getFullYear()
      ),
      month: Array.from(
        { length: 12 - dateRange[0].value.getMonth() },
        (_, i) => i + dateRange[0].value.getMonth() + 1
      ),
      date: Array.from(
        { length: lastDate.getDate() - dateRange[0].value.getDate() + 1 },
        (_, i) => i + dateRange[0].value.getDate()
      ),
    },
    {
      title: "종료",
      year: Array.from(
        new Array(20),
        (val, index) => index + dateRange[0].value.getFullYear()
      ),
      month: Array.from(
        { length: 12 - dateRange[0].value.getMonth() },
        (_, i) => i + dateRange[0].value.getMonth() + 1
      ),
      date: Array.from(
        { length: lastDate.getDate() - dateRange[0].value.getDate() + 1 },
        (_, i) => i + dateRange[0].value.getDate()
      ),
    },
  ]);
  console.log(dateOption);
  const handleYear = () => {};
  const handleMonth = () => {};
  const handleDate = () => {};
  const list = dateOption.map((e) => (
    <Line>
      <LineTitle>{e.title}</LineTitle>
      <LineContent>
        <Each>
          <select onChange={handleYear} value={e.year[0]}>
            {e.year.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
          <Str>년</Str>
        </Each>
        <Each>
          <select onChange={handleMonth} value={e.month[0]}>
            {e.month.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
          <Str>월</Str>
        </Each>
        <Each>
          <select onChange={handleDate} value={e.date[0]}>
            {e.date.map((date) => (
              <option value={date} key={date}>
                {date}
              </option>
            ))}
          </select>
          <Str>일</Str>
        </Each>
        <Each>
          <input type="number" />
        </Each>
      </LineContent>
    </Line>
  ));
  return (
    <SettingsWrapper>
      <Title>일정 설정</Title>
      <Container>
        <ListWrapper>{list}</ListWrapper>
        <Btn>후보추가</Btn>
      </Container>
    </SettingsWrapper>
  );
};
const ListWrapper = styled.div``;
const Str = styled.div`
  margin: 0 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: white;
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
