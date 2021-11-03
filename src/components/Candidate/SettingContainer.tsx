import { createContext, useContext, useReducer, useState } from "react";
import styled from "styled-components";
import SelectFormat from "../SelectFormat/SelectFormat";

const SettingContainer = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  console.log(today.getFullYear() + 10);
  return (
    <SettingContainerWrapper>
      <ListWrapper>
        <SelectFormat
          year={true}
          range={[today.getFullYear(), today.getFullYear() + 10]}
          value={today.getFullYear()}
        />
      </ListWrapper>
      <Btn>후보추가</Btn>
    </SettingContainerWrapper>
  );
};

const SettingContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ListWrapper = styled.div``;

const Btn = styled.button`
  font-size: 20px;
  font-weight: 600;
  width: 94px;
  height: 38px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
`;

export default SettingContainer;
