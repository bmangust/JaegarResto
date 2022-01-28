import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDiscountedPrice } from 'src/util';
import { Dish } from '../menu/menuSlice';

export interface ICartItem {
  item: Dish;
  quantity: number;
  note: string;
}

export const labels = ['dine in', 'to go', 'delivery'] as const;
export type DeliveryType = typeof labels[number];

interface ICartState {
  items: ICartItem[];
  delivery: DeliveryType;
  total: number;
}

interface IUpdateOrderNotePayload {
  item: Dish;
  note: string;
}
interface IUpdateItemInCart {
  item: Dish;
  quantity: number;
}

interface IUpdateOrderDelivery {
  delivery: DeliveryType;
}

interface IUpdateOrderTotal {
  total: number;
}

const initialState: ICartState = {
  items: [],
  delivery: labels[0],
  total: 0,
};

const getTotalSum = (items: ICartItem[]) =>
  +items
    .reduce((prev, cur) => {
      const price = getDiscountedPrice(cur.item);
      prev += price * cur.quantity;
      return prev;
    }, 0)
    .toFixed(2);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart() {
      return initialState;
    },
    /**
     * 1. find index
     * 2. if found - add quantity
     * 3. if not found - add item with quantity 1
     * @param state
     * @param PayloadAction<Dish>
     */
    addItemToCart(state, { payload }: PayloadAction<Dish>) {
      // do not need to create new deep copy because we use @redux/toolkit with immer
      // we could even mutate state, because it's an immer proxy
      const index = state.items.findIndex(
        (cartItem) => cartItem.item.id === payload.id
      );
      if (index < 0) state.items.push({ item: payload, quantity: 1, note: '' });
      else state.items[index].quantity++;
      state.total = getTotalSum(state.items);
    },
    subtractItemToFromCart(state, { payload }: PayloadAction<Dish>) {
      // do not need to create new deep copy because we use @redux/toolkit with immer
      // we could even mutate state, because it's an immer proxy
      const index = state.items.findIndex(
        (cartItem) => cartItem.item.id === payload.id
      );
      if (index < 0) return;
      if (state.items[index].quantity === 1)
        state.items = state.items.filter((item) => item.item.id !== payload.id);
      else state.items[index].quantity--;
      state.total = getTotalSum(state.items);
    },
    /**
     * remove passed Dish from cart completeley
     * @param state
     * @param PayloadAction<Dish>
     */
    deleteItemFromCart(state, { payload }: PayloadAction<Dish>) {
      console.log(payload);
      state.items = state.items.filter(
        (cartItem) => cartItem.item.id !== payload.id
      );
      state.total = getTotalSum(state.items);
    },
    /**
     * 1. find index
     * 2. if found - update quantity
     * 3. if not found - throw error (should not be)
     * @param state
     * @param PayloadAction<Dish>
     */
    updateItemInCart(state, { payload }: PayloadAction<IUpdateItemInCart>) {
      const index = state.items.findIndex(
        (cartItem) => cartItem.item.id === payload.item.id
      );
      if (index < 0) throw new Error('[updateItemInCart] No dish found!');
      if (payload.quantity > 99) state.items[index].quantity = 99;
      else state.items[index].quantity = payload.quantity;
      state.total = getTotalSum(state.items);
    },
    updateOrderNote(
      state,
      { payload }: PayloadAction<IUpdateOrderNotePayload>
    ) {
      if (!payload.note) return;
      const index = state.items.findIndex(
        (cartItem) => cartItem.item.id === payload.item.id
      );
      if (index < 0) throw new Error('[updateOrderNote] No dish found!');
      if (state.items[index].note === payload.note) return;
      state.items[index].note = payload.note;
    },
    updateOrderDelivery(
      state,
      { payload }: PayloadAction<IUpdateOrderDelivery>
    ) {
      state.delivery = payload.delivery;
    },
  },
});

export const {
  addItemToCart,
  subtractItemToFromCart,
  deleteItemFromCart,
  updateItemInCart,
  updateOrderNote,
  updateOrderDelivery,
} = cartSlice.actions;
export default cartSlice.reducer;
