import styled from "styled-components";

const ScheduleCandidate = () => {
  return (
    <ScheduleCandidateWrapper>
      <Header>
        <Title>일정 후보</Title>
        <ResetBtn>초기화</ResetBtn>
      </Header>
      <Content></Content>
    </ScheduleCandidateWrapper>
  );
};
const Title = styled.div``;
const ResetBtn = styled.button`
  font-size: 20px;
  background-color: white;
  font-weight: 500;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid skyblue;
`;
const Header = styled.div`
  margin: 20px 0px;
  height: 41px;
  background-color: #f0f2f5;
  font-size: 25px;
  font-weight: 600;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  margin-bottom: 30px;
  justify-content: space-between;
`;
const Content = styled.div``;
const ScheduleCandidateWrapper = styled.div`
  width: 618px;
`;

export default ScheduleCandidate;
