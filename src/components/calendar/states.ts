import { atom, selector } from 'recoil';
import { getCalendarData } from './getCalendarData';
import { getScheduleData } from './getScheduleData';

const today = new Date();

export const yearAtom = atom({
  key: 'yearAtom',
  default: today.getFullYear(),
});

export const monthAtom = atom({
  key: 'monthAtom', // 찐 월 - 1 값
  default: today.getMonth(),
});

export const calendarsDataState = selector({
  key: 'calendarsDataAtom',
  get: ({ get }) => {
    const year = get(yearAtom);
    const month = get(monthAtom);
    return [
      getCalendarData(year, month - 1),
      getCalendarData(year, month),
      getCalendarData(year, month + 1),
    ];
  },
});

export const schedulesDataAtom = selector({
  key: 'schedulesDataAtom',
  get: ({ get }) => {
    const year = get(yearAtom);
    const month = get(monthAtom);
    return [getScheduleData(), getScheduleData(), getScheduleData()];
  },
});
