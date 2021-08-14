import { createContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import CalenderBox from "./CalenderBox";
import MenuContainer from "./MenuContainer";
import ToggleContainer from "./ToggleContainer";

export const MenuContext = createContext(null);
const MainContainer = () => {
  const menudata = [{ id: 1, title: "일정투포 추가", isSelect: false }];
  const [menu, setMenu] = useState(menudata);
  return (
    <MenuContext.Provider value={{ menu: menu, setMenu: setMenu }}>
      <MainContainerWrapper>
        <MenuContainer />
        <ToggleContainer />
        <CalenderBox />
      </MainContainerWrapper>
    </MenuContext.Provider>
  );
};

const MainContainerWrapper = styled.div`
  width: 80%;
  border: 1px solid blue;
`;

export default MainContainer;
