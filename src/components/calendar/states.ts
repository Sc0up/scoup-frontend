import { atom, selector } from 'recoil';
import { getCalendarData } from './getCalendarData';

const today = new Date();

export const yearAtom = atom({
  key: 'yearAtom',
  default: today.getFullYear(),
});

export const monthAtom = atom({
  key: 'monthAtom',
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
