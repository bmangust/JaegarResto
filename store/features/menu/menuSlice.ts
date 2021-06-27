export interface Dish {
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
    title: 'Spicy seasoned seafood noodles',
    category: 'Hot dishes',
    price: 2.29,
    avalible: 20,
    image: '/images/Image 1.png',
  },
  {
    title: 'Salted Pasta with mushroom sauce',
    category: 'Hot dishes',
    price: 2.689,
    avalible: 11,
    image: '/images/Image 2.png',
  },
  {
    title: 'Beef dumpling in hot and sour soup',
    category: 'Hot dishes',
    price: 2.99,
    avalible: 16,
    image: '/images/Image 3.png',
  },
  {
    title: 'Beef dumpling in hot and sour soup',
    category: 'Hot dishes',
    price: 2.99,
    avalible: 16,
    image: '/images/Image 3.png',
  },
  {
    title: 'Beef dumpling in hot and sour soup',
    category: 'Hot dishes',
    price: 2.99,
    avalible: 16,
    image: '/images/Image 3.png',
  },
  {
    title: 'Beef dumpling in hot and sour soup',
    category: 'Hot dishes',
    price: 2.99,
    avalible: 16,
    image: '/images/Image 3.png',
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
