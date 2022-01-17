import { useAppSelector } from '@/store/hooks';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1.5rem;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem;
  }
`;

const CartListFooter = () => {
  const items = useAppSelector((state) => state.cart.items);
  const discount = 0;
  const total = items
    .reduce((prev, cur) => {
      prev += cur.item.price * cur.quantity;
      return prev;
    }, 0)
    .toFixed(2);

  return (
    <Div>
      <div className="item discount">
        <span>Discount</span>
        <span>$ {discount}</span>
      </div>
      <div className="item">
        <span>Total</span>
        <span>$ {total}</span>
      </div>
    </Div>
  );
};

export default CartListFooter;
