import { Dispatch } from "react";
import styled from "styled-components";
import SettingContainer from "./SettingContainer";

export interface ISettings {
  startDate: Date;
  endDate: Date;
  setStartDate: Dispatch<Date>;
  setEndDate: Dispatch<Date>;
}
export interface IDateOption {
  title: string;
  year: number[];
  month: number[];
  date: number[];
}
const Settings = () => {
  return (
    <SettingsWrapper>
      <Title>일정 설정</Title>
      <SettingContainer />
    </SettingsWrapper>
  );
};

const Title = styled.div`
  height: 41px;
  background-color: #f0f2f5;
  font-size: 25px;
  font-weight: 600;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  margin-bottom: 30px;
`;

const SettingsWrapper = styled.div``;
export default Settings;
