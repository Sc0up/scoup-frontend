import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import CreateButton from "../components/Schedule/CreateButton";
import Header from "../components/Schedule/Header";
import MainContents from "../components/Schedule/MainContents";

export const DateContext = createContext(null);
const SchedulePage = () => {
  const [date, setDate] = useState(null);
  return (
    <DateContext.Provider value={{ date: date, setDate: setDate }}>
      <SchedulePageWrapper>
        <Header />
        <MainContents />
        <CreateButton />
      </SchedulePageWrapper>
    </DateContext.Provider>
  );
};
const SchedulePageWrapper = styled.div``;

export default SchedulePage;
