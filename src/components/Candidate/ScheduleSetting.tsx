import styled from "styled-components";
import { useState } from "react";

const ScheduleSetting = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const lastDate = new Date(year, month, 0);

  const [years, setYears] = useState(
    Array.from(new Array(20), (val, index) => index + year)
  );
  const [months, setMonths] = useState(
    Array.from({ length: 12 - month + 1 }, (_, i) => i + month)
  );
  const [dates, setDates] = useState(
    Array.from({ length: lastDate.getDate() - day }, (_, i) => i + day)
  );

  const [endYears, setEndYears] = useState([...years]);
  const [endMonths, setEndMonths] = useState([...months]);
  const [endDates, setEndDates] = useState([...dates]);

  const [currYear, setCurrYear] = useState(year);
  const [currMonth, setMonth] = useState(month);
  const [currDate, setDate] = useState(date.getDate());

  const [endYear, setEndYear] = useState(year);
  const [endMonth, setEndMonth] = useState(month);
  const [endDate, setEndDate] = useState(date.getDate());

  interface IObj {
    title: string;
  }

  const yearList = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));
  const monthList = months.map((month) => (
    <option value={month} key={month}>
      {month}
    </option>
  ));
  const dateList = dates.map((date) => (
    <option value={date} key={date}>
      {date}
    </option>
  ));

  const endYearList = endYears.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));
  const endMonthList = endMonths.map((month) => (
    <option value={month} key={month}>
      {month}
    </option>
  ));
  const endDateList = endDates.map((date) => (
    <option value={date} key={date}>
      {date}
    </option>
  ));
  const handleStartMonth = (e: any) => {
    let curr = e.target.value;
    setMonth(e.target.value);
    const lastDate = new Date(currYear, e.target.value, 0).getDate();
    setDates(Array.from({ length: lastDate }, (_, i) => i + 1));
    if (currYear === endYear && curr >= endMonth) {
      setEndMonths(
        Array.from(
          { length: 12 - e.target.value + 1 },
          (_, i) => i + parseInt(e.target.value)
        )
      );
      setEndMonth(curr);
      setEndDates(Array.from({ length: lastDate }, (_, i) => i + 1));
    }
  };
  const handleStartYear = (e: any) => {
    const curr = e.target.value;
    const lastDate = new Date(curr, currMonth, 0).getDate();
    if (curr > year) {
      setMonths(Array.from({ length: 12 }, (_, i) => i + 1));
      setEndMonths(Array.from({ length: 12 }, (_, i) => i + 1));
      setEndDates(Array.from({ length: lastDate }, (_, i) => i + 1));
    }
    setCurrYear(curr);
    setDates(Array.from({ length: lastDate }, (_, i) => i + 1));
    setEndYears(
      Array.from(
        new Array(20 - (curr - year)),
        (val, index) => index + parseInt(curr)
      )
    );
    setEndYear(curr);
  };
  const handleStartDate = (e: any) => {
    const curr = e.target.value;
    setDate(e.target.value);
    if (currYear === endYear && currMonth === endMonth && curr > endDate) {
      const lastDate = new Date(currYear, currMonth, 0).getDate();
      setEndDates(
        Array.from(
          { length: lastDate - e.target.value },
          (_, i) => i + parseInt(e.target.value)
        )
      );
      setEndDate(e.target.value);
    }
  };

  const handleEndMonth = (e: any) => {
    setEndMonth(e.target.value);
    const lastDate = new Date(currYear, e.target.value, 0).getDate();
    setEndDates(Array.from({ length: lastDate }, (_, i) => i + 1));
  };
  const handleEndYear = (e: any) => {
    setEndYear(e.target.value);
    const lastDate = new Date(e.target.value, currMonth, 0).getDate();
    setEndDates(Array.from({ length: lastDate }, (_, i) => i + 1));
  };
  const handleEndDate = (e: any) => {
    setEndDate(e.target.value);
  };
  return (
    <ScheduleSettingWrapper>
      <Title>일정 설정</Title>
      <SettingContent>
        <ScheduleRange>
          <Start>
            <StartTitle>시작</StartTitle>
            <ContentWrapper>
              <Each>
                <select onChange={handleStartYear} value={currYear}>
                  {yearList}
                </select>
                <Str>년</Str>
              </Each>
              <Each>
                <select onChange={handleStartMonth} value={currMonth}>
                  {monthList}
                </select>
                <Str>월</Str>
              </Each>
              <Each>
                <select onChange={handleStartDate} value={currDate}>
                  {dateList}
                </select>
                <Str>일</Str>
              </Each>
            </ContentWrapper>
          </Start>
          <End>
            <EndTitle>종료</EndTitle>
            <ContentWrapper>
              <Each>
                <select onChange={handleEndYear} value={endYear}>
                  {endYearList}
                </select>
                <Str>년</Str>
              </Each>
              <Each>
                <select onChange={handleEndMonth} value={endMonth}>
                  {endMonthList}
                </select>
                <Str>월</Str>
              </Each>
              <Each>
                <select onChange={handleEndDate} value={endDate}>
                  {endDateList}
                </select>
                <Str>일</Str>
              </Each>
            </ContentWrapper>
          </End>
        </ScheduleRange>
        <Btn>후보추가</Btn>
      </SettingContent>
    </ScheduleSettingWrapper>
  );
};
const Str = styled.div`
  margin: 0 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: white;
`;
const Each = styled.div`
  display: flex;
`;

const SettingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  font-size: 20px;
  font-weight: 600;
  width: 102px;
  height: 41px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
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
const ScheduleRange = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;
const Start = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const StartTitle = styled.div`
  font-size: 20px;
  background-color: gray;
  padding: 5px;
`;
const Content = styled.div`
  background-color: gray;
  width: 363px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const ContentWrapper = styled(Content)`
  display: flex;
  /* justify-content: space-between; */
`;
const End = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const EndTitle = styled.div`
  font-size: 20px;
  background-color: gray;
  padding: 5px;
`;
const EndContent = styled(Content)``;
const ScheduleSettingWrapper = styled.div`
  width: 618px;
`;

export default ScheduleSetting;
