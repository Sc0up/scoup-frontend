import styled from "styled-components";
import EndDate from "./EndDate";
import EndMonth from "./EndMonth";
import EndTime from "./EndTime";
import EndYear from "./EndYear";

const EndContainer = () => {
  return (
    <EndContainerWrapper>
      <Title>종료</Title>
      <Content>
        <EndYear />
        <EndMonth />
        <EndDate />
        <EndTime />
      </Content>
    </EndContainerWrapper>
  );
};
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
const EndContainerWrapper = styled.div`
  display: flex;
`;

export default EndContainer;
