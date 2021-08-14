import React, { useContext, useState } from "react";
import { MenuContext } from "./MainContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = () => {
  const [addSchedule, setAddSchedule] = useState(false);
  const { menu, setMenu } = useContext(MenuContext);
  console.log(menu, setMenu);
  return (
    <MenuContainerWrapper>
      <Link to="/schedulePage">
        <ScheduleButton>일정추가</ScheduleButton>
      </Link>
      <button>그룹관리</button>
    </MenuContainerWrapper>
  );
};
const ScheduleButton = styled.button`
  background-color: ${({ addSchedule }) => {
    if (addSchedule === true) return "blue";
  }};
`;

const MenuContainerWrapper = styled.div`
  padding: 10px;
`;

export default MenuContainer;
