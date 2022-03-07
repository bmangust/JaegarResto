import styled from 'styled-components';
import { motion } from 'framer-motion';
import SidebarIcon from '@/components/Icon/Icon';
import Input from '@/components/Input/Input';
import {
  deleteItemFromCart,
  ICartItem,
  updateItemInCart,
  updateOrderNote,
} from '@/store/features/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';

interface Props {
  item: ICartItem;
}
const StyledDiv = styled(motion.div)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  /* height: 150px; */
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;

  .itemData {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 50px minmax(100px, 1fr) 80px;
    grid-auto-rows: 60px;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
  }

  .itemData-img {
    height: 50px;
  }

  .itemData-titleWrapper {
    display: flex;
    flex-direction: column;

    .itemData-title {
      font-size: 0.9rem;
      margin-bottom: 0.2rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .itemData-price {
      color: ${({ theme }) => theme.colors.text.gray};
      font-size: 0.7rem;
    }
  }

  .itemData-quantity {
    width: max-content;
    margin-left: 10px;
    /* padding: 10px 5px; */
  }

  .itemData-note {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .orderData {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 60px;
    grid-gap: 10px;
    align-items: center;

    .orderData-total {
      white-space: nowrap;
      text-align: end;
    }

    .orderData-delete .button {
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
    .orderData-delete .button:hover {
      transform: scale(1.1);
    }
  }
`;

const variants = {
  animate: {
    x: 0,
    transition: {
      duration: 0.1,
    },
  },
  initial: { x: '100%' },
  exit: {
    x: '100%',
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
  const getWidth = (quantity: number) => {
    // 50 is optimal width for 2 numbers;
    return Math.max(50, 10 + quantity.toString().toString().length * 15) + 'px';
  };

  const newPrice = item.item.discount
    ? +((item.item.price * (100 - item.item.discount)) / 100).toFixed(2)
    : item.item.price;
  const total = (newPrice * item.quantity).toFixed(2);

  return (
    <StyledDiv key={item.item.id} {...variants}>
      <div className="itemData">
        <img
          className="itemData-img"
          src={item.item.image}
          alt={`${item.item.title} image`}
        />
        <div className="itemData-titleWrapper">
          <span className="itemData-title">{item.item.title}</span>
          <span className="itemData-price">$ {newPrice}</span>
        </div>
        <Input
          className="quantity"
          align="center"
          width={getWidth(item.quantity)}
          value={item.quantity}
          onChange={updateQuantity}
          type="number"
        />
        <Input
          className="itemData-note"
          width="250px"
          value={item.note}
          onChange={updateNote}
          placeholder="Order note..."
        />
      </div>
      <div className="orderData">
        <span className="orderData-total">$ {total}</span>
        <div className="orderData-delete">
          <button className="button">
            <SidebarIcon onClick={handleDelete} icon="delete" active={false} />
          </button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default CartItem;
