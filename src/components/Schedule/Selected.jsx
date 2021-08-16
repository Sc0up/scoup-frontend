import styled from "styled-components";
import { useContext } from "react";
import { DateContext } from "../../pages/SchedulePage";

const Selected = () => {
  const { store } = useContext(DateContext);
  const { tempData } = store;
  const [temp, setTemp] = tempData;
  const removeTarget = (time) => {
    let newArr = [...temp];
    const filterData = newArr.filter((data) => data !== time);
    setTemp(filterData);
  };
  const data = temp.map((time) => (
    <SelectedTime>
      <SelectedData>
        <div>{time.dateValue}</div>
        <div>{time.time}</div>
      </SelectedData>
      <RemoveButton onClick={() => removeTarget(time)}>-</RemoveButton>
    </SelectedTime>
  ));
  return <SelectedWrapper>{data}</SelectedWrapper>;
};
const SelectedData = styled.div`
  display: flex;
  /* justify-content: space-between; */
  & > div {
    margin-right: 20px;
  }
`;
const RemoveButton = styled.button``;
const SelectedTime = styled.div`
  background-color: white;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;
const SelectedWrapper = styled.div`
  padding: 5px;
  background-color: #c2bcbc;
  height: 500px;
`;

export default Selected;
