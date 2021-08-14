import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SelectSchedule = () => {
  const scheduleLine = [
    { id: "0800", time: "08:00" },
    { id: "0830", time: "08:30" },
    { id: "0900", time: "09:00" },
    { id: "0930", time: "09:30" },
    { id: "1000", time: "10:00" },
    { id: "1030", time: "10:30" },
    { id: "1100", time: "11:00" },
    { id: "1130", time: "11:30" },
    { id: "1200", time: "12:00" },
    { id: "1230", time: "12:30" },
    { id: "1300", time: "13:00" },
    { id: "1330", time: "13:30" },
    { id: "1400", time: "14:00" },
    { id: "1430", time: "14:30" },
  ];
  const [time, setTime] = useState(scheduleLine);
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // });
  const getTarget = (e: any) => {
    e.select = true;
    return e.select;
  };
  const list = time.map((e) => (
    <List onClick={() => getTarget(e)} key={e.id}>
      {e.time}
    </List>
  ));
  return <SelectScheduleWrapper>{list}</SelectScheduleWrapper>;
};
const List = styled.li`
  padding: 5px;
  background-color: ${({ onClick }) => (onClick ? "yellow" : "#FEFEFE")};
  &:hover {
    background-color: greenyellow;
  }
`;
const SelectScheduleWrapper = styled.ul`
  list-style: none;
  overflow-y: scroll;
  height: 400px;
`;

export default SelectSchedule;
