import { useAppSelector } from '@/store/hooks';
import React from 'react';
import CartItem from './CartItem';

function CartList() {
  const items = useAppSelector((state) => state.menu.dishes);
  return (
    <div>
      <CartItem item={items[0]} quantity={1} />
    </div>
  );
}

export default CartList;
