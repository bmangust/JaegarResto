import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type Page =
  | 'Home'
  | 'Discount'
  | 'Pie'
  | 'Message'
  | 'Bell'
  | 'Settings';
interface ToolbarState {
  current: Page;
}

const initialState: ToolbarState = {
  current: 'Home',
};

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<Page>) => {
      state.current = payload;
    },
  },
});

export const { setCurrentPage } = toolbarSlice.actions;

export const selectCurrentPage = (state: RootState) => state.toolbar.current;
export default toolbarSlice.reducer;
