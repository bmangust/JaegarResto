import { Dish } from '@/store/features/menu/menuSlice';
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

const getDiscountedPrice = (item: Dish) => {
  return item.discount
    ? +((item.price * (100 - item.discount)) / 100).toFixed(2)
    : item.price;
};

const CartListFooter = () => {
  const items = useAppSelector((state) => state.cart.items);
  const discount = +items
    .reduce((prev, cur) => {
      prev += (cur.item.price * cur.quantity * (cur.item.discount || 0)) / 100;
      return prev;
    }, 0)
    .toFixed(2);
  const total = +items
    .reduce((prev, cur) => {
      const price = getDiscountedPrice(cur.item);
      prev += price * cur.quantity;
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
