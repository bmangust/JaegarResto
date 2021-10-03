import { useAppSelector } from '@/store/hooks';
import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const StyledDiv = styled.div`
  flex-grow: 2;
  margin-top: 20px;
  max-height: calc(100vh - 148px - 75px);
  overflow-y: scroll;
`;

function CartList() {
  const items = useAppSelector((state) => state.cart.items);
  if (items.length === 0) return <StyledDiv>Add some items to cart</StyledDiv>;
  return (
    <StyledDiv>
      {items.map((el) => (
        <CartItem item={el} key={el.item.id} />
      ))}
    </StyledDiv>
  );
}

export default CartList;
