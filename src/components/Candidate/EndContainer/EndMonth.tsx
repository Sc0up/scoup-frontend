import { useContext } from "react";
import styled from "styled-components";
import { ActionType, settingsContext } from "../reducer/SettingsReducer";

const EndMonth = () => {
  const { state, dispatch } = useContext(settingsContext);
  const { startDate, endDate, endOptions } = state;
  // console.log(endDate.getMonth());
  const handleMonth = (e: any) => {};
  return (
    <EndMonthWrapper>
      <select onChange={handleMonth} value={endDate.getMonth() + 1}>
        {endOptions.months.map((month) => (
          <option value={month} key={month}>
            {month}
          </option>
        ))}
      </select>
      <Str>월</Str>
    </EndMonthWrapper>
  );
};

const EndMonthWrapper = styled.div`
  display: flex;
`;
const Str = styled.div`
  padding: 5px;
`;

export default EndMonth;
