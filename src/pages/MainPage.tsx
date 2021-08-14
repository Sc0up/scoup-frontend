import styled from "styled-components";
import MainContainer from "../components/Main/MainContainer/MainContainer";
import SideBar from "../components/Main/SideBar/SideBar";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <SideBar />
      <MainContainer />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div``;

export default MainPage;
