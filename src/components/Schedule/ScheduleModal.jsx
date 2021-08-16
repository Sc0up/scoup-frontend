import { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../pages/SchedulePage";
import PollSet from "./ScheduleModal/PollSet";
import ScheduleList from "./ScheduleModal/ScheduleList";
import { Link } from "react-router-dom";
const ScheduleModal = () => {
  const { store } = useContext(DateContext);
  console.log(store);
  const { titleData, isVisible } = store;
  const [title] = titleData;
  const [, setIsComponentVisible] = isVisible;
  const reSelect = () => {
    setIsComponentVisible(true);
  };
  return (
    <ScheduleModalWrapper onClick={(e) => e.stopPropagation()}>
      <ModalBox>
        <ModalTitle>일정투표 확인</ModalTitle>
        <ScheduleTitle>
          <div>일정이름</div>
          <div>{title}</div>
        </ScheduleTitle>
        <div>
          <ScheduleList />
          <PollSet />
        </div>
        <Footer>
          <div>다음과 같은 사항을 투표로 생성하시겠습니까?</div>
          <ButtonWrapper>
            <ReSelectButton onClick={reSelect}>일정 다시 선택</ReSelectButton>
            <Link to="/mainPage">
              <OkButton>네</OkButton>
            </Link>
          </ButtonWrapper>
        </Footer>
      </ModalBox>
    </ScheduleModalWrapper>
  );
};
const ReSelectButton = styled.button`
  font-size: 20px;
  margin-right: 30px;
`;
const OkButton = styled.button`
  font-size: 20px;
`;
const ModalBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: whitesmoke;
  padding: 20px;
`;
const ModalTitle = styled.div`
  padding: 10px;
  font-size: 30px;
  text-align: center;
`;
const ScheduleTitle = styled.div`
  font-size: 25px;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  & > div {
    margin-right: 20px;
  }
  background-color: gray;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainContainer = styled.div``;
const Footer = styled.div`
  padding: 10px;
  font-size: 20px;
  & > div {
    margin-bottom: 20px;
  }
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
const ScheduleModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export default ScheduleModal;
