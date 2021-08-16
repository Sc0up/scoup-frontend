import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../pages/SchedulePage";
import Select from "./Select";
import Selected from "./Selected";

const SelectSchedule = () => {
  const { store } = useContext(DateContext);
  const { tempData, dateData } = store;
  const [temp, setTemp] = tempData;
  const [date] = dateData;
  const scheduleLine = [
    { id: "0800", isEmpty: true, time: "08:00" },
    { id: "0830", isEmpty: true, time: "08:30" },
    { id: "0900", isEmpty: false, time: "09:00" },
    { id: "0930", isEmpty: true, time: "09:30" },
    { id: "1000", isEmpty: true, time: "10:00" },
    { id: "1030", isEmpty: true, time: "10:30" },
    { id: "1100", isEmpty: true, time: "11:00" },
    { id: "1130", isEmpty: true, time: "11:30" },
    { id: "1200", isEmpty: true, time: "12:00" },
    { id: "1230", isEmpty: true, time: "12:30" },
    { id: "1300", isEmpty: true, time: "13:00" },
    { id: "1330", isEmpty: true, time: "13:30" },
    { id: "1400", isEmpty: true, time: "14:00" },
    { id: "1430", isEmpty: true, time: "14:30" },
  ];
  const [time] = useState(scheduleLine);
  const rangeObj = { start: null, end: null };
  const [range, setRange] = useState(rangeObj);
  const addList = () => {
    let newRange = { ...range };
    if (newRange.start === null) return alert("시간을 선택해주세요");
    let start = createTime(newRange.start);
    let end = createTime(newRange.end);
    let timeData = `${start}~${end}`;
    setTimeArr(timeData);
    resetSelect();
  };
  const setTimeArr = (timeData) => {
    let data = { dateValue: date, time: timeData };
    let newArr = [...temp].map((e) => JSON.stringify(e));
    let newSet = new Set(newArr);
    if (!newSet.has(JSON.stringify(data))) {
      setTemp([...temp, data]);
    } else {
      return alert("이미 추가한 시간입니다.");
    }
  };
  const createTime = (data) => {
    return data.slice(0, 2) + ":" + data.slice(2, data.length);
  };

  const resetSelect = () => {
    setRange((info) => {
      let newObj = { ...info };
      newObj.start = null;
      newObj.end = null;
      return newObj;
    });
  };
  return (
    <SelectScheduleWrapper>
      <Select
        resetSelect={resetSelect}
        time={time}
        range={range}
        setRange={setRange}
      />
      <AddButton onClick={addList}>추가</AddButton>
      <Selected />
    </SelectScheduleWrapper>
  );
};
const AddButton = styled.button``;
const SelectScheduleWrapper = styled.ul``;

export default SelectSchedule;
