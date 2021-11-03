import { useContext } from "react";
import styled from "styled-components";
import { settingsContext } from "../reducer/SettingsReducer";

const StartTime = () => {
  const { state, dispatch } = useContext(settingsContext);
  const { startDate } = state;
  const handleTime = (e: any) => {};
  return (
    <StartTimeWrapper>
      <TimeInput
        onChange={handleTime}
        defaultValue={`${startDate.getHours()}:${startDate.getMinutes()}`}
        type="text"
      ></TimeInput>
    </StartTimeWrapper>
  );
};
const TimeInput = styled.input`
  width: 60px;
`;
const StartTimeWrapper = styled.div``;

export default StartTime;
