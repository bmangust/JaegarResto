import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import PaymentMethod from './PaymentMethod';
import CardDetails from './CardDetails';
import OrderHeader from '../Order/OrderHeader';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { showCartBar } from '@/store/features/toolbar/toolbarSlice';

const StyledContainer = styled.div`
  width: max(30vw, 400px);
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};
  color: ${({ theme }) => theme.colors.white};
  z-index: 5;

  .motion {
    height: 100vh;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: 1px solid ${({ theme }) => theme.colors.base.darkLine};

    .payment-body {
      flex-grow: 2;
    }

    .payment-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
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
    transition: {
      delay: 0.1,
    },
  },
};

function Payment() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(showCartBar());
  };
  const handlePayment = () => {
    console.log(`Payment.`);
    console.log({ cart });
  };
  return (
    <StyledContainer>
      <motion.div key="Payment" className="motion" {...variants}>
        <OrderHeader title="Payment" />
        <div className="payment-body">
          <PaymentMethod />
          <CardDetails />
        </div>
        <div className="payment-buttons">
          <Button variant="outline" onClick={handleBack}>
            Cancel
          </Button>
          <Button onClick={handlePayment}>Confirm Payment</Button>
        </div>
      </motion.div>
    </StyledContainer>
  );
}

export default Payment;
