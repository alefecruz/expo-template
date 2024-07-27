type ConverterDateAndTimeToDate = {
  date: string;
  time: string;
};

export function converterDateAndTimeToDate({ date, time }: ConverterDateAndTimeToDate) {
  const [year, month, day] = date.split('-').map(Number);
  const [hours, minutes, seconds] = time.split(':').map(Number);

  const fullYear = year < 100 ? year + 2000 : year;

  return new Date(fullYear, month - 1, day, hours, minutes, seconds);
}
