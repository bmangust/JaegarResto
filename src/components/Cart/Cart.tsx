import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '@/components/Button/Button';
import Delivery from '@/components/Delivery/Delivery';
import CartList from './CartList';
import CartListFooter from './CartListFooter';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { showPaymentBar } from '@/store/features/toolbar/toolbarSlice';

const StyledContainer = styled.div`
  width: max(30vw, 400px);
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};
  color: ${({ theme }) => theme.colors.white};

  .motion {
    height: 100vh;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .cart-header {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    & .title {
      font-size: max(1.5rem, 24pt);
      margin: 0;
      margin-bottom: 1rem;
    }
  }
`;

const variants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  initial: { opacity: 0 },
  exit: {
    opacity: 0,
  },
};

function Cart() {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handlePayment = () => {
    dispatch(showPaymentBar());
  };
  return (
    <StyledContainer>
      <motion.div key="Cart" className="motion" {...variants}>
        <div className="cart-header">
          <h2 className="title">Order #12345</h2>
          <Delivery />
        </div>
        <CartList />
        <CartListFooter />
        <Button disabled={items.length === 0} onClick={handlePayment}>
          Continue to Payment
        </Button>
      </motion.div>
    </StyledContainer>
  );
}

export default Cart;
