import { Dish } from '@/store/features/menu/menuSlice';
import styled from 'styled-components';
import Icon from '@/components/Icon/Icon';
import Input from '@/components/Input/Input';
import {
  deleteItemFromCart,
  ICartItem,
  updateItemInCart,
  updateOrderNote,
} from '@/store/features/cart/cartSlice';
import React from 'react';
import { useAppDispatch } from '@/store/hooks';
import { motion } from 'framer-motion';

interface Props {
  item: ICartItem;
}
const StyledDiv = styled(motion.div)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  & .item-header {
    display: flex;
    align-items: center;
  }

  & .item-header .img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  & .item-header .titleWrapper {
    /* 50px image + 10px margin + 60px input + 10px margin */
    width: calc(100% - 60px - 70px);
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  & .item-header .titleWrapper .title {
    font-size: 0.9rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 10px;
  }
  & .item-header .titleWrapper .price {
    color: ${({ theme }) => theme.colors.text.gray};
    font-size: 0.7rem;
  }

  & .quantity {
    width: 60px;
    margin-left: 10px;
    padding: 10px 5px;
  }

  & .total {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    white-space: nowrap;
  }

  & .item-footer {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  & .orderNote {
    width: 100%;
  }

  & .col1 {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .item-footer .button {
    background-color: inherit;
    border: ${({ theme }) => '1px solid ' + theme.colors.primary};
    outline: none;
    border-radius: 10px;
    width: 60px;
    margin-left: 10px;
    margin-right: 3px;
    transform: scale(1);
    transition: 0.3s;
  }
  & .item-footer .button:hover {
    transform: scale(1.1);
  }
`;

const variants = {
  animate: {
    x: 0,
    transition: {
      duration: 0.1,
    },
  },
  initial: { x: '-100%' },
  exit: {
    x: '-100%',
  },
};

const CartItem = ({ item }: Props) => {
  if (!item) return <span>nothing</span>;
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteItemFromCart(item.item));
  };
  const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      item: item.item,
      note: e.currentTarget.value,
    };
    dispatch(updateOrderNote(payload));
  };
  const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') return;
    const quantity = +e.currentTarget.value;
    if (isNaN(quantity)) return;
    const payload = {
      item: item.item,
      quantity,
    };
    dispatch(updateItemInCart(payload));
  };

  const roundedQuantity =
    Math.round(item.item.price * item.quantity * 100) / 100;

  return (
    <StyledDiv key={item.item.id} {...variants}>
      <div className="item-header">
        <div className="col1">
          <img
            className="img"
            src={item.item.image}
            alt={`${item.item.title} image`}
          />
          <div className="titleWrapper">
            <span className="title">{item.item.title}</span>
            <span className="price">$ {item.item.price}</span>
          </div>
          <Input
            className="quantity"
            align="center"
            width="47px"
            value={item.quantity}
            onChange={updateQuantity}
          />
        </div>
        <span className="total">$ {roundedQuantity}</span>
      </div>
      <div className="item-footer">
        <div className="col1">
          <Input
            className="orderNote"
            width="250px"
            value={item.note}
            onChange={updateNote}
            placeholder="Order note..."
          />
        </div>
        <div className="total">
          <button className="button">
            <Icon
              onClick={handleDelete}
              icon="delete"
              color="white"
              active={false}
            />
          </button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default CartItem;
