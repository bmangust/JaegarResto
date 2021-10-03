import { useAppSelector } from '@/store/hooks';
import React from 'react';
import CartItem from './CartItem';

function CartList() {
  const items = useAppSelector((state) => state.menu.dishes);
  return (
    <div>
      <CartItem item={items[0]} quantity={1} />
      <CartItem item={items[2]} quantity={22} />
    </div>
  );
}

export default CartList;
