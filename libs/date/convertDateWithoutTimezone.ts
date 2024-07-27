export const convertDateWithoutTimezone = (date: Date) =>
  new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0, 0));
