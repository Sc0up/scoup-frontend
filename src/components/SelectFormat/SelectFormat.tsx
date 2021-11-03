import { useState } from "react";
import styled from "styled-components";
import SelectHours from "./SelectHours";
interface ISelectFormat {
  year?: boolean;
  range?: number[];
  value?: number;
}

const SelectFormat = ({ year, value, range }: ISelectFormat) => {
  return (
    <SelectFormatWrapper>
      {year && <SelectHours value={value} range={range} />}
    </SelectFormatWrapper>
  );
};

const SelectFormatWrapper = styled.div``;

export default SelectFormat;
