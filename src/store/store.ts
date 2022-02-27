import { configureStore } from '@reduxjs/toolkit';
import toolbarReducer from './features/toolbar/toolbarSlice';
import menuReducer from './features/menu/menuSlice';
import cartReducer from './features/cart/cartSlice';
import paymentReducer from './features/payment/paymentSlice';

export const store = configureStore({
  reducer: {
    toolbar: toolbarReducer,
    menu: menuReducer,
    cart: cartReducer,
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
