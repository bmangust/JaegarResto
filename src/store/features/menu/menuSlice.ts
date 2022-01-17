export interface Dish {
  id: number;
  title: string;
  category: string;
  price: number;
  avalible: number;
  image: string;
  discount?: number;
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface MenuState {
  dishes: Dish[];
  initialDishes: Dish[];
}

const initialState: MenuState = {
  dishes: [],
  initialDishes: [],
};

interface ISearchPayload {
  search: string;
}

interface ISaveMenuPayload {
  dishes: Dish[];
}

export const menuSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    saveMenuSlice(state, { payload }: PayloadAction<ISaveMenuPayload>) {
      return { dishes: payload.dishes, initialDishes: payload.dishes };
    },
    resetMenuSlice(state) {
      return { ...state, dishes: state.initialDishes };
    },
    searchDishes(state, { payload }: PayloadAction<ISearchPayload>) {
      const { search } = payload;
      if (search.length === 0) return { ...state, dishes: state.initialDishes };
      return {
        ...state,
        dishes: state.initialDishes.filter((dish) =>
          dish.title.search(new RegExp(search, 'i')) < 0 ? false : true
        ),
      };
    },
  },
});

export const { saveMenuSlice, resetMenuSlice, searchDishes } =
  menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.dishes;
export default menuSlice.reducer;
