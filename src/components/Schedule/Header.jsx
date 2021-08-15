import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { DateContext } from "../../pages/SchedulePage";

const Header = () => {
  const { store } = useContext(DateContext);
  const { titleData } = store;
  const [title, setTitle] = titleData;
  // console.log()
  const getTitle = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };
  return (
    <HeaderWrapper>
      <TitleInput onChange={getTitle}></TitleInput>
      <CloseButton>닫기</CloseButton>
    </HeaderWrapper>
  );
};
const TitleInput = styled.input`
  width: 500px;
  height: 40px;
  margin-right: 20px;
`;
const CloseButton = styled.button``;
const HeaderWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export default Header;
