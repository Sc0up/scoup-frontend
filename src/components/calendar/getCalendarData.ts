import { Month, Day } from './types';

interface WeekDataArgs {
  dayCount: number;
  lastDate: number;
  firstDayNameIdx?: number;
}

export const getWeekData = ({
  dayCount,
  lastDate,
  firstDayNameIdx = 0,
}: WeekDataArgs): [number, string[]] => {
  const emptyWeek = new Array(7).fill(null); // 달력 모양의 이차원 배열 초기화
  const week = emptyWeek.map((_, i) => {
    if (i < firstDayNameIdx || dayCount >= lastDate) return '';
    dayCount++;
    return `${dayCount}`;
  });
  return [dayCount, week];
};

export const getCalendarData = (year: number, monthIdx: Month): string[][] => {
  let weeksData: string[][] = [];
  const firstDayOfMonth = new Date(year, monthIdx, 1);
  const lastDayOfMonth = new Date(year, monthIdx + 1, 0);
  const firstDayNameIdx: Day = firstDayOfMonth.getDay(); // 해당 월 1일의 요일의 인덱스. 1일이 수요일이면 3
  const lastDate = lastDayOfMonth.getDate(); // 마지막 날짜. 8월이면 31, 9월이면 30

  let dayCount = 0;

  for (let i = 0; i < 6; i++) {
    if (dayCount === 0) {
      const [count, firstWeek] = getWeekData({
        dayCount,
        lastDate,
        firstDayNameIdx,
      });
      dayCount = count;
      weeksData.push(firstWeek);
    } else if (dayCount < lastDate) {
      const [count, restWeek] = getWeekData({ dayCount, lastDate });
      dayCount = count;
      weeksData.push(restWeek);
    }
    if (dayCount >= lastDate) break;
  }
  return weeksData;
};
