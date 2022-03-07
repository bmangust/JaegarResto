import styled from 'styled-components';
import { useAppSelector } from '@/store/hooks';

const Div = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.base.darkBG};

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem;
  }
`;

const CartListFooter = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  const discount = +items
    .reduce((prev, cur) => {
      prev += (cur.item.price * cur.quantity * (cur.item.discount || 0)) / 100;
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
