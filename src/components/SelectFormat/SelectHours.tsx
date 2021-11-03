import { useState } from "react";
import styled from "styled-components";
interface ISelectHours {
  value?: number;
}
const SelectHours = ({ value }: ISelectHours) => {
  const [hoursValue, Sethours] = useState(value);
  const [hourOptions, SetHourOptions] = useState();
  return <SelectHoursWrapper value={hoursValue}></SelectHoursWrapper>;
};

const SelectHoursWrapper = styled.select``;

export default SelectHours;
