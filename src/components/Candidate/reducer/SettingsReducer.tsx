import { createContext } from "react";
const start = new Date();
const date = new Date();
const end = new Date();

const lastDate = new Date(date.getFullYear(), start.getMonth(), 0);
end.setHours(start.getHours() + 1);
function findOption(a: number, b: number) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
}
export const dataInitialState: SettingsState = {
  isFrist: true,
  isEndFrist: true,
  currDate: date,
  startDate: start,
  endDate: end,
  startOptions: {
    years: Array.from(
      new Array(20),
      (val, index) => index + start.getFullYear()
    ),
    months: Array.from(
      { length: 12 - start.getMonth() },
      (_, i) => i + start.getMonth() + 1
    ),
    dates: Array.from(
      { length: lastDate.getDate() - start.getDate() },
      (_, i) => i + start.getDate()
    ),
  },
  endOptions: {
    years: Array.from(new Array(20), (val, index) => index + end.getFullYear()),
    months: Array.from(
      { length: 12 - end.getMonth() },
      (_, i) => i + end.getMonth() + 1
    ),
    dates: Array.from(
      { length: lastDate.getDate() - end.getDate() },
      (_, i) => i + end.getDate()
    ),
  },
};
export interface SettingsState {
  isFrist: boolean;
  isEndFrist: boolean;
  currDate: Date;
  startDate: Date;
  endDate: Date;
  startOptions: IOptions;
  endOptions: IOptions;
}
export interface IOptions {
  [key: string]: number[];
  years: number[];
  months: number[];
  dates: number[];
}
export interface SetStartDate {
  type: ActionType.SetStartDate;
  payload: Date;
}
export interface SetEndDate {
  type: ActionType.SetEndDate;
  payload: Date;
}

export interface SetIsFrist {
  type: ActionType.SetIsFrist;
  payload: boolean;
}

export interface SetStartOptions {
  type: ActionType.SetStartOptions;
  payload: IOptions;
}

export enum ActionType {
  SetStartDate,
  SetEndDate,
  SetStartOptions,
  SetEndOptions,
  SetDateOptions,
  SetMonthOptions,
  SetEndMonthOptions,
  SetIsFrist,
  SetEndDateOptions,
}
export type SettingsActions =
  | SetStartDate
  | SetEndDate
  | SetIsFrist
  | SetStartOptions;
export const settingsReducer = (
  state: SettingsState,
  action: SettingsActions
) => {
  switch (action.type) {
    case ActionType.SetEndDate:
      return {
        ...state,
        endDate: action.payload,
      };
    case ActionType.SetStartDate:
      return {
        ...state,
        startDate: action.payload,
      };
    case ActionType.SetStartOptions:
      return {
        ...state,
        startOptions: action,
      };
    case ActionType.SetIsFrist:
      return {
        ...state,
        isFrist: action.payload,
      };
  }
};
interface INewObj {
  year: number[];
}
const setStartOption = (options: IOptions, arr: Array<number[]>) => {
  // let newObj = { ...options };
  // Object.keys(newObj).forEach((key, index) => {
  //   console.log(newObj[key]);
  // });
  // return newObj;
  // let newObj: INewObj = {};
  // newObj.year = findOption(arr[0][0], arr[0][1]);
};
export const settingsContext = createContext<{
  state: SettingsState;
  dispatch: React.Dispatch<SettingsActions>;
}>({
  state: dataInitialState,
  dispatch: () => undefined,
});
