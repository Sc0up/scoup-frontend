import styled from "styled-components";
import StartDate from "./StartDate";
import StartMonth from "./StartMonth";
import StartTime from "./StartTime";
import StartYear from "./StartYear";

const StartContainer = () => {
  const handleStart = () => {};
  return (
    <StartContainerWrapper>
      <Title>시작</Title>
      <Content>
        <StartYear />
        <StartMonth />
        <StartDate />
        <StartTime />
      </Content>
    </StartContainerWrapper>
  );
};

const StartContainerWrapper = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 20px;
  background-color: gray;
  padding: 5px;
  margin: 5px 0;
`;
const Content = styled.div`
  display: flex;
  background-color: gray;
  width: 363px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 5px 20px;
  padding: 5px;
`;

export default StartContainer;
