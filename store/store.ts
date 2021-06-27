import { configureStore } from '@reduxjs/toolkit';
import toolbarReducer from './features/toolbar/toolbarSlice';
import menuReducer from './features/menu/menuSlice';

export const store = configureStore({
  reducer: {
    toolbar: toolbarReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
