import { formatInTimeZone, ptBR } from './adapter';

type IDateConvertedToTimezone = {
  date: string;
  time: string;
};

export const convertDateWithTimezone = (date: Date): IDateConvertedToTimezone => {
  const timeZone = 'America/Sao_Paulo';
  const dateConverted = formatInTimeZone(date, timeZone, 'yyyy-MM-dd', { locale: ptBR });
  const time = formatInTimeZone(date, timeZone, 'HH:mm:ss', { locale: ptBR });
  return { date: dateConverted, time };
};
