import styled from "styled-components";
import { useEffect } from "react";

const Selected = ({ temp, setTemp }) => {
  const removeTarget = (time) => {
    let newArr = [...temp];
    const filterData = newArr.filter((data) => data !== time);
    setTemp(filterData);

    console.log(time);
  };
  const data = temp.map((time) => (
    <SelectedTime>
      <SelectedData>{time}</SelectedData>
      <RemoveButton onClick={() => removeTarget(time)}>-</RemoveButton>
    </SelectedTime>
  ));
  return <SelectedWrapper>{data}</SelectedWrapper>;
};
const SelectedData = styled.div``;
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
