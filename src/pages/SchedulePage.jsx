import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import CreateButton from "../components/Schedule/CreateButton";
import Header from "../components/Schedule/Header";
import MainContents from "../components/Schedule/MainContents";
import ScheduleModal from "../components/Schedule/ScheduleModal";
import useComponentVisible from "../components/Modal";
export const DateContext = createContext(null);
const SchedulePage = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [temp, setTemp] = useState([]);
  const store = {
    isVisible: [isComponentVisible, setIsComponentVisible],
    dateData: [date, setDate],
    titleData: [title, setTitle],
    tempData: [temp, setTemp],
  };
  return (
    <DateContext.Provider value={{ store }}>
      <SchedulePageWrapper isComponentVisible={isComponentVisible}>
        <Header />
        <MainContents />
        <CreateButton />
        {!isComponentVisible && <ScheduleModal />}
      </SchedulePageWrapper>
    </DateContext.Provider>
  );
};
const SchedulePageWrapper = styled.div`
  /* background-color: ${({ isComponentVisible }) => {
    if (isComponentVisible !== true) return "black";
  }};
  opacity: ${({ isComponentVisible }) => {
    if (isComponentVisible !== true) return "0.6";
  }}; */
  position: relative;
`;

export default SchedulePage;
