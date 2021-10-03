import { configureStore } from '@reduxjs/toolkit';
import toolbarReducer from './features/toolbar/toolbarSlice';
import menuReducer from './features/menu/menuSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    toolbar: toolbarReducer,
    menu: menuReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
