import { useContext } from "react";
import styled from "styled-components";
import { TempContext } from "./TempSchedule";

const CandidateContent = () => {
  const { tempCandidate, setTempCandidate } = useContext(TempContext);
  const list = tempCandidate.map((e: any) => (
    <CandidateBox>
      <Header></Header>
      <MainContent>
        <StartBox>
          <Title>시작</Title>
          <Content>{`${e.start?.getFullYear()}년\n${
            e.start?.getMonth() + 1
          }월\n${e.start?.getDate()}일`}</Content>
          <Time>{`${e.start?.getHours()}:${e.start?.getMinutes()}`}</Time>
        </StartBox>
        <EndBox>
          <Title>종료</Title>
          <Content>{`${e.end?.getFullYear()}년\n${
            e.end?.getMonth() + 1
          }월\n${e.end?.getDate()}일`}</Content>
          <Time>{`${e.end?.getHours()}:${e.end?.getMinutes()}`}</Time>
        </EndBox>
      </MainContent>
    </CandidateBox>
  ));
  return <CandidateContentWrapper>{list}</CandidateContentWrapper>;
};
const Header = styled.div`
  height: 20px;
  width: 100%;
  border: 1px solid black;
  background-color: gray;
  border-radius: 10px 10px 0 0;
`;
const MainContent = styled.div`
  background-color: whitesmoke;
  /* width: 40%; */
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
`;
const Box = styled.div`
  display: flex;
`;
const StartBox = styled.div`
  display: flex;
  /* font-size: 20px; */
  margin-bottom: 10px;
`;
const Title = styled.div`
  margin-right: 20px;
`;
const Content = styled.div`
  margin-right: 20px;
`;
const Time = styled.div``;
const EndBox = styled.div`
  display: flex;
`;
const CandidateBox = styled.div`
  margin: 30px;
`;
const CandidateContentWrapper = styled.div`
  background-color: gray;
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: scroll;
`;

export default CandidateContent;
