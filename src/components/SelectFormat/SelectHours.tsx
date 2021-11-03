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
  const [hoursValue, Sethours] = useState(value);
  const [hourOptions, SetHourOptions] = useState(getRangeArray(range));
  return (
    <SelectHoursWrapper>
      {hourOptions !== undefined && (
        <HourSelect value={hoursValue}>
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
