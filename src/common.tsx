export interface IDate {
  year: string;
  month: number;
  date: number;
  hours: number;
  minutes: number;
}
export function createDate(
  year: any,
  month: any,
  date: any,
  hours: any,
  minutes: any
) {
  return new Date(year, month, date, hours, minutes);
}
