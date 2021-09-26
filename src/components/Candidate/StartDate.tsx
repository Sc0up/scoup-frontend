import { useState } from "react";
import styled from "styled-components";
import { ISettings } from "./Settings";

const StartDate = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: ISettings) => {
  const [lastDate, setLastDate] = useState(
    new Date(startDate.getFullYear(), startDate.getMonth(), 0)
  );
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
  const handleStartDate = () => {};
  return (
    <StartDateWrapper>
      <LineTitle>시작</LineTitle>
      <LineContent>
        <Each>
          <select
            onChange={(e: any) => handleStartDate}
            value={startDate.getFullYear()}
          >
            {startOptions.years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
          <Str>년</Str>
        </Each>
        <Each>
          <select onChange={handleStartDate} value={startDate.getFullYear()}>
            {startOptions.months.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
          <Str>월</Str>
        </Each>
        <Each>
          <select onChange={handleStartDate} value={startDate.getDate()}>
            {startOptions.dates.map((date) => (
              <option value={date} key={date}>
                {date}
              </option>
            ))}
          </select>
          <Str>일</Str>
        </Each>
        <Each>
          <input
            value={`${startDate.getHours()}:${startDate.getMinutes()}`}
            type="text"
          />
        </Each>
      </LineContent>
    </StartDateWrapper>
  );
};
const Str = styled.div`
  padding: 5px;
`;
const Each = styled.div`
  display: flex;
`;
const StartDateWrapper = styled.div`
  display: flex;
`;
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

export default StartDate;
