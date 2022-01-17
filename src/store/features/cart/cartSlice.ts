import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish } from '../menu/menuSlice';

export interface ICartItem {
  item: Dish;
  quantity: number;
  note: string;
}

interface ICartState {
  items: ICartItem[];
}

interface IUpdateOrderNotePayload {
  item: Dish;
  note: string;
}
interface IUpdateItemInCart {
  item: Dish;
  quantity: number;
}

const initialState: ICartState = {
  items: [],
};

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
      else state.items[index].quantity = payload.quantity;
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
  },
});

export const {
  addItemToCart,
  deleteItemFromCart,
  updateItemInCart,
  updateOrderNote,
} = cartSlice.actions;
export default cartSlice.reducer;
