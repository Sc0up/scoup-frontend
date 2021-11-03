import { useState } from "react";
import styled from "styled-components";
interface ISelectHours {
  value?: number;
  range?: number[];
}
const SelectHours = ({ value, range }: ISelectHours) => {
  const getRangeArray = (range?: number[]) => {
    if (range === undefined) return undefined;
    const [start, end] = range;
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i);
    }
    return options;
  };
  const [hoursValue, setHours] = useState(value);
  const [hourOptions, setHourOptions] = useState(getRangeArray(range));
  const handleYear = (e: any) => {
    const targetValue = e.target.value;
    setHours(targetValue);
  };
  return (
    <SelectHoursWrapper>
      {hourOptions !== undefined && (
        <HourSelect onChange={handleYear} value={hoursValue}>
          {hourOptions.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </HourSelect>
      )}
    </SelectHoursWrapper>
  );
};
const HourSelect = styled.select``;
const SelectHoursWrapper = styled.div``;

export default SelectHours;
