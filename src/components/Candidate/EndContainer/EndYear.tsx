import { useContext } from "react";
import styled from "styled-components";
import { ActionType, settingsContext } from "../reducer/SettingsReducer";

const EndYear = () => {
  const { state, dispatch } = useContext(settingsContext);
  const { startDate, isEndFrist, endDate, endOptions } = state;
  const handleYear = (e: any) => {};
  return (
    <EndYearWrapper>
      <select onChange={handleYear} value={endDate.getFullYear()}>
        {endOptions.years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <Str>년</Str>
    </EndYearWrapper>
  );
};

const EndYearWrapper = styled.div`
  display: flex;
`;
const Str = styled.div`
  padding: 5px;
`;

export default EndYear;
