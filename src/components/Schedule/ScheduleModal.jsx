import { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../pages/SchedulePage";
import PollSet from "./ScheduleModal/PollSet";
import ScheduleList from "./ScheduleModal/ScheduleList";

const ScheduleModal = () => {
  const { store } = useContext(DateContext);
  console.log(store);
  const { titleData } = store;
  const [title] = titleData;
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
        <Footer></Footer>
      </ModalBox>
    </ScheduleModalWrapper>
  );
};
const ModalBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: whitesmoke;
  /* text-align: center; */
`;
const ModalTitle = styled.div`
  padding: 10px;
  font-size: 30px;
  text-align: center;
`;
const ScheduleTitle = styled.div`
  display: flex;
  & > div {
    margin-right: 20px;
  }
`;
const MainContainer = styled.div``;
const Footer = styled.div``;
const ScheduleModalWrapper = styled.div`
  /* width: 700px;
  height: 800px; */
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
