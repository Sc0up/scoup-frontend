import { useContext, useState } from "react";
import styled from "styled-components";
import { ActionType, settingsContext } from "../reducer/SettingsReducer";

const StartMonth = () => {
  const { state, dispatch } = useContext(settingsContext);
  const { startDate, currDate, endDate, isFrist, startOptions } = state;
  const handleMonth = (e: any) => {};
  return (
    <StartMonthWrapper>
      <select onChange={handleMonth} value={startDate.getMonth() + 1}>
        {startOptions.months.map((month) => (
          <option value={month} key={month}>
            {month}
          </option>
        ))}
      </select>
      <Str>월</Str>
    </StartMonthWrapper>
  );
};

const StartMonthWrapper = styled.div`
  display: flex;
`;
const Str = styled.div`
  padding: 5px;
`;

export default StartMonth;
