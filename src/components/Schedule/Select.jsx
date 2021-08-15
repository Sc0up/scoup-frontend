import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { DateContext } from "../../pages/SchedulePage";

const Select = ({ resetSelect, time, range, setRange }) => {
  const { date } = useContext(DateContext);

  const setData = (e) => {
    setRange((info) => {
      let newObj = { ...info };
      console.log(newObj);
      if (newObj.start === null || newObj.start > e.id) {
        newObj.start = e.id;
        newObj.end = e.id;
      } else if (
        newObj.end < e.id ||
        (newObj.end > e.id && newObj.start < e.id)
      ) {
        newObj.end = e.id;
      }
      return newObj;
    });
  };

  const getTarget = (e) => {
    setData(e);
  };
  const list = time.map((e) => (
    <List
      rangeData={range}
      setData={e.id}
      onClick={() => getTarget(e)}
      key={e.id}
    >
      <SelectList>{e.isEmpty ? "선택가능" : "선택불가"}</SelectList>
      <TimeList>{e.time}</TimeList>
    </List>
  ));

  return (
    <SelectWrapper>
      <DateBox>
        <div>{date}</div>
        <button onClick={resetSelect}>초기화</button>
      </DateBox>
      <ListBox>{list}</ListBox>
    </SelectWrapper>
  );
};
const TimeList = styled.li`
  padding: 5px;
`;
const SelectList = styled.li`
  padding: 5px;
`;

const List = styled.div`
  background-color: ${({ rangeData, setData }) => {
    let data = { ...rangeData };
    if (data.start <= setData && data.end >= setData) return "yellow";
  }};
  display: flex;
  padding: 5px;
`;
const SelectWrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;

const ListBox = styled.ul`
  list-style: none;
  overflow-y: scroll;
  height: 400px;
  width: 100%;
`;
const DateBox = styled.div`
  font-size: 25px;
  font-weight: 500;
  padding: 5px;
`;

export default Select;
