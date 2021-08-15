import styled from "styled-components";

const ScheduleModal = () => {
  return (
    <ScheduleModalWrapper onClick={(e) => e.stopPropagation()}>
      dddd
    </ScheduleModalWrapper>
  );
};

const ScheduleModalWrapper = styled.div`
  width: 700px;
  height: 800px;
  border: 1px solid red;
  position: absolute;
  top: 70px;
  background-color: whitesmoke;
`;

export default ScheduleModal;
