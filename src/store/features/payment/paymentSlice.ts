import { ChangeEvent } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isEmpty, isNumeric } from 'src/util';

export const deliveryLabels = ['dine in', 'to go', 'delivery'] as const;
export type DeliveryType = typeof deliveryLabels[number];

interface IPayment {
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  orderType: DeliveryType;
  table: string;
}
export type StateKeys = keyof IPayment;

interface IUpdateDelivery {
  delivery: DeliveryType;
}

interface IUpdatePayment {
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>;
}

const initialState: IPayment = {
  cardholderName: '',
  cardNumber: '',
  expirationDate: '',
  cvv: '',
  orderType: 'dine in',
  table: '',
};

const PaymentSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
    resetOrder() {
      return initialState;
    },
    updateOrderDelivery(state, { payload }: PayloadAction<IUpdateDelivery>) {
      state.orderType = payload.delivery;
    },
    updatePayment(state, { payload }: PayloadAction<IUpdatePayment>) {
      if (
        (payload.e.target.id === 'cardNumber' ||
          payload.e.target.id === 'cvv') &&
        !isEmpty(payload.e.target.value) &&
        !isNumeric(payload.e.target.value)
      )
        return;
      return {
        ...state,
        [payload.e.target.id as StateKeys]:
          payload.e.target.value.toLocaleUpperCase(),
      };
    },
  },
});

export const { resetOrder, updateOrderDelivery, updatePayment } =
  PaymentSlice.actions;
export default PaymentSlice.reducer;
