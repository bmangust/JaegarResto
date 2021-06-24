import dayjs from 'dayjs';

export const formatTime = (time: number | Date, format = 'HH:mm') => {
  if (!time) throw new Error('[formatTime] time is requierd');
  return dayjs(time).format(format);
};
