export interface Dish {
  id: number;
  title: string;
  category: string;
  price: number;
  avalible: number;
  image: string;
}

const categories = [
  'Hot dishes',
  'Cold dishes',
  'Soup',
  'Grill',
  'Appetizer',
  'Dessert',
];

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface MenuState {
  dishes: Dish[];
}

const initialDishes: Dish[] = [
  {
    id: 0,
    title: 'Spicy seasoned seafood noodles',
    category: 'Soup',
    price: 2.29,
    avalible: 20,
    image: '/images/Image 1.png',
  },
  {
    id: 1,
    title: 'Salted Pasta with mushroom sauce',
    category: 'Hot dishes',
    price: 2.68,
    avalible: 11,
    image: '/images/Image 2.png',
  },
  {
    id: 2,
    title: 'Beef dumpling in hot and sour soup',
    category: 'Hot dishes',
    price: 2.99,
    avalible: 16,
    image: '/images/Image 3.png',
  },
  {
    id: 3,
    title: 'Healthy noodle with spinach leaf',
    category: 'Cold dishes',
    price: 3.29,
    avalible: 22,
    image: '/images/Image 4.png',
  },
  {
    id: 4,
    title: 'Hot spicy fried rice with omelet',
    category: 'Cold dishes',
    price: 3.49,
    avalible: 13,
    image: '/images/Image 5.png',
  },
  {
    id: 5,
    title: 'Spicy instant noodle with special omelette',
    category: 'Dessert',
    price: 3.59,
    avalible: 17,
    image: '/images/Image 6.png',
  },
  {
    id: 6,
    title: 'Healthy noodle with spinach leaf',
    category: 'Hot dishes',
    price: 3.59,
    avalible: 17,
    image: '/images/Image 7.png',
  },
  {
    id: 7,
    title: 'Beef dumpling in hot and sour soup',
    category: 'Hot dishes',
    price: 2.49,
    avalible: 22,
    image: '/images/Image 8.png',
  },
  {
    id: 8,
    title: 'Spicy instant noodle with special omelette',
    category: 'Hot dishes',
    price: 3.99,
    avalible: 16,
    image: '/images/Image 9.png',
  },
  {
    id: 9,
    title: 'Healthy noodle with spinach leaf',
    category: 'Grill',
    price: 3.59,
    avalible: 17,
    image: '/images/Image 7.png',
  },
  {
    id: 10,
    title: 'Bowl of creamy carrot soup',
    category: 'Soup',
    price: 4.42,
    avalible: 10,
    image: '/images/Image 10.png',
  },
  {
    id: 11,
    title: 'Bowl of soup with ladle',
    category: 'Soup',
    price: 3.99,
    avalible: 5,
    image: '/images/Image 11.png',
  },
];

const initialState: MenuState = {
  dishes: initialDishes,
};

export const menuSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {},
});

export const {} = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.dishes;
export default menuSlice.reducer;
