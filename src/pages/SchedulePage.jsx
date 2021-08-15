import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import CreateButton from "../components/Schedule/CreateButton";
import Header from "../components/Schedule/Header";
import MainContents from "../components/Schedule/MainContents";
import ScheduleModal from "../components/Schedule/ScheduleModal";

export const DateContext = createContext(null);
const SchedulePage = () => {
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [temp, setTemp] = useState([]);
  const store = {
    dateData: [date, setDate],
    titleData: [title, setTitle],
    tempData: [temp, setTemp],
  };
  return (
    <DateContext.Provider value={{ store }}>
      <SchedulePageWrapper>
        <Header />
        <MainContents />
        <CreateButton />
        <ScheduleModal />
      </SchedulePageWrapper>
    </DateContext.Provider>
  );
};
const SchedulePageWrapper = styled.div``;

export default SchedulePage;
