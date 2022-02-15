import dayjs from 'dayjs';
import { Dish } from './store/features/menu/menuSlice';

export const formatTime = (time: number | Date, format = 'HH:mm') => {
  if (!time) throw new Error('[formatTime] time is requierd');
  return dayjs(time).format(format);
};

export const getDiscountedPrice = (item: Dish) => {
  return item.discount
    ? +((item.price * (100 - item.discount)) / 100).toFixed(2)
    : item.price;
};

export const isNumeric = (str: string): boolean => {
  return +str + '' === str;
};

export const isEmpty = (str: string) => {
  return str.length === 0;
};
