import { useState } from "react";
import styled from "styled-components";
import { ISettings } from "./Settings";

const EndDate = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: ISettings) => {
  const [lastDate, setLastDate] = useState(
    new Date(startDate.getFullYear(), startDate.getMonth(), 0)
  );
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
  // const handleEndDate = () => {};
  const handleEndYear = () => {};
  const handleEndMonth = () => {};
  const handleEndDate = () => {};
  return (
    <EndDateWrapper>
      <LineTitle>종료</LineTitle>
      <LineContent>
        <Each>
          <select onChange={handleEndYear} value={endDate.getFullYear()}>
            {endOptions.years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
          <Str>년</Str>
        </Each>
        <Each>
          <select onChange={handleEndMonth} value={endDate.getFullYear()}>
            {endOptions.months.map((month) => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
          <Str>월</Str>
        </Each>
        <Each>
          <select onChange={handleEndDate} value={endDate.getDate()}>
            {endOptions.dates.map((date) => (
              <option value={date} key={date}>
                {date}
              </option>
            ))}
          </select>
          <Str>일</Str>
        </Each>
        <Each>
          <input
            defaultValue={`${endDate.getHours()}:${endDate.getMinutes()}`}
            type="text"
          />
        </Each>
      </LineContent>
    </EndDateWrapper>
  );
};

const EndDateWrapper = styled.div`
  display: flex;
`;
const Str = styled.div`
  padding: 5px;
`;
const Each = styled.div`
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
export default EndDate;
