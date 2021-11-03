import { useContext } from "react";
import styled from "styled-components";
import { ActionType, settingsContext } from "../reducer/SettingsReducer";

const StartYear = () => {
  const { state, dispatch } = useContext(settingsContext);
  const { startDate, currDate, isFrist, endDate, startOptions } = state;
  const handleYear = ({ target }: any) => {
    const curr = target.value;
    const lastDate = new Date(curr, startDate.getMonth() + 1, 0);
    const findStartMonth = () => {
      console.log(curr, currDate.getFullYear());
      return parseInt(curr) === currDate.getFullYear()
        ? currDate.getMonth() + 1
        : 1;
    };
    const findOption = (a: number, b: number) => {
      const arr = [];
      for (let i = a; i <= b; i++) {
        arr.push(i);
      }
    };
    const findStartDay = () => {
      return parseInt(curr) === currDate.getFullYear() ? currDate.getDate() : 1;
    };
    const startMonth = findStartMonth();
    const startDay = findStartDay();
    // const dateOption = [
    //   [currDate.getFullYear(), currDate.getFullYear() + 20],
    //   [startMonth, 12],
    //   [startDay, lastDate.getDate()],
    // ];
    const yearOption = findOption(
      currDate.getFullYear(),
      currDate.getFullYear() + 20
    );
    const monthOption = findOption(startMonth, 12);
    const dateOption = findOption(startDay, lastDate.getDate());
    console.log(dateOption);
    const date = new Date(curr, startDate.getMonth(), startDate.getDate());
    const options = {
      years: yearOption,
      months: monthOption,
      dates: dateOption,
    };
    dispatch({
      type: ActionType.SetStartDate,
      payload: date,
    });
    dispatch({
      type: ActionType.SetStartOptions,
      payload: options,
    });
  };
  return (
    <StartYearWrapper>
      <select onChange={handleYear} value={startDate.getFullYear()}>
        {startOptions.years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <Str>년</Str>
    </StartYearWrapper>
  );
};

const StartYearWrapper = styled.div`
  display: flex;
`;
const Str = styled.div`
  padding: 5px;
`;

export default StartYear;
