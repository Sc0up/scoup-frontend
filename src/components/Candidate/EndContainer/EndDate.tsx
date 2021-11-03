import { useContext } from "react";
import styled from "styled-components";
import { ActionType, settingsContext } from "../reducer/SettingsReducer";

const EndDate = () => {
  const { state, dispatch } = useContext(settingsContext);
  const { startDate, endDate, endOptions } = state;
  const handleDate = (e: any) => {};
  return (
    <EndDateWrapper>
      <select onChange={handleDate} value={endDate.getDate()}>
        {endOptions.dates.map((date) => (
          <option value={date} key={date}>
            {date}
          </option>
        ))}
      </select>
      <Str>일</Str>
    </EndDateWrapper>
  );
};

const EndDateWrapper = styled.div`
  display: flex;
`;
const Str = styled.div`
  padding: 5px;
`;

export default EndDate;
