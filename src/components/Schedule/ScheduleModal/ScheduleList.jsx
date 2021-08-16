import { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../../pages/SchedulePage";

const ScheduleList = () => {
  const { store } = useContext(DateContext);
  const { tempData } = store;
  const [temp] = tempData;
  const newTemp = [...temp];
  const list = temp.map((data, index) => (
    <List key={index}>
      <div>{data.dateValue}</div>
      <div>{data.time}</div>
    </List>
  ));
  return (
    <ScheduleListWrapper>
      <Title>일정후보</Title>
      <Schedule>{list}</Schedule>
      <Cnt>{`${newTemp.length}개`}</Cnt>
    </ScheduleListWrapper>
  );
};
const Title = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;
const Cnt = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-size: 20px;
`;
const List = styled.div`
  background-color: whitesmoke;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  & > div {
    margin-right: 20px;
  }
`;
const Schedule = styled.div``;
const ScheduleListWrapper = styled.div`
  background-color: gray;
  padding: 10px;
`;

export default ScheduleList;
