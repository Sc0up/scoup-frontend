import { useContext } from "react";
import styled from "styled-components";
import { ActionType, settingsContext } from "../reducer/SettingsReducer";

const StartDate = () => {
  const { state, dispatch } = useContext(settingsContext);
  const { startDate, endDate, startOptions } = state;
  const handleDate = (e: any) => {};
  return (
    <StartDateWrapper>
      <select onChange={handleDate} value={startDate.getDate()}>
        {startOptions.dates.map((date) => (
          <option value={date} key={date}>
            {date}
          </option>
        ))}
      </select>
      <Str>일</Str>
    </StartDateWrapper>
  );
};

const StartDateWrapper = styled.div`
  display: flex;
`;
const Str = styled.div`
  padding: 5px;
`;

export default StartDate;
