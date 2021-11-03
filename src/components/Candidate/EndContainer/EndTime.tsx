import { useContext } from "react";
import styled from "styled-components";
import { settingsContext } from "../reducer/SettingsReducer";

const EndTime = () => {
  const { state, dispatch } = useContext(settingsContext);
  const { endDate } = state;
  return (
    <EndTimeWrapper>
      <TimeInput
        defaultValue={`${endDate.getHours()}:${endDate.getMinutes()}`}
        type="text"
      ></TimeInput>
    </EndTimeWrapper>
  );
};
const TimeInput = styled.input`
  width: 60px;
`;
const EndTimeWrapper = styled.div``;

export default EndTime;
