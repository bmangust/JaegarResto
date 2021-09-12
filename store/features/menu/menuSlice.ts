export interface Dish {
  id: number;
  title: string;
  category: string;
  price: number;
  avalible: number;
  image: string;
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { initialDishes } from './initialDishes';

interface MenuState {
  dishes: Dish[];
}

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
