import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const pages = {
  home: '',
  discount: '',
  pie: '',
  message: '',
  bell: '',
  settings: '',
  delete: '',
};

type OrderBar = 'cart' | 'payment';

export type Page = keyof typeof pages;
interface ToolbarState {
  current: Page;
  orderBar: OrderBar;
}
export const isPage = (value: string): value is Page => {
  return pages.hasOwnProperty(value);
};

const initialState: ToolbarState = {
  current: 'home',
  orderBar: 'cart',
};

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<Page>) => {
      state.current = payload;
    },
    showCartBar: (state) => {
      state.orderBar = 'cart';
    },
    showPaymentBar: (state) => {
      state.orderBar = 'payment';
    },
  },
});

export const { setCurrentPage } = toolbarSlice.actions;

export const selectCurrentPage = (state: RootState) => state.toolbar.current;
export default toolbarSlice.reducer;
