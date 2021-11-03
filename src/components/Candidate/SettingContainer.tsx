import { createContext, useContext, useReducer } from "react";
import styled from "styled-components";
import EndContainer from "./EndContainer/EndContainer";
import {
  dataInitialState,
  settingsContext,
  settingsReducer,
} from "./reducer/SettingsReducer";
import StartContainer from "./StartContainer/StartContainer";
import { TempContext } from "./TempSchedule";

const SettingContainer = () => {
  const [state, dispatch] = useReducer(settingsReducer, dataInitialState);
  const { startDate, endDate } = state;
  const { tempCandidate, setTempCandidate } = useContext(TempContext);
  const AddList = () => {
    setTempCandidate([...tempCandidate, { start: startDate, end: endDate }]);
  };
  return (
    <settingsContext.Provider value={{ state, dispatch }}>
      <SettingContainerWrapper>
        <ListWrapper>
          <StartContainer />
          <EndContainer />
        </ListWrapper>
        <Btn onClick={AddList}>후보추가</Btn>
      </SettingContainerWrapper>
    </settingsContext.Provider>
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
