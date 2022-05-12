import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import PaymentMethod from './PaymentMethod';
import CardDetails from './CardDetails';
import OrderHeader from '../Order/OrderHeader';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { showCartBar } from '@/store/features/toolbar/toolbarSlice';

const StyledContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 35vw;
  height: 100vh;
  padding: 24px;
  /* background-color: ${({ theme }) => theme.colors.base.darkerBG};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
  z-index: 6 !important;

  .content-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
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

function Payment({ className }: Partial<HTMLDivElement>) {
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
    <StyledContainer key="Payment" className={className} {...variants}>
      <OrderHeader className="content-header" title="Payment" />
      <div className="content-body">
        <PaymentMethod />
        <CardDetails />
      </div>
      <div className="content-buttons">
        <Button variant="outline" onClick={handleBack}>
          Cancel
        </Button>
        <Button disabled={cart.items.length === 0} onClick={handlePayment}>
          Confirm Payment
        </Button>
      </div>
    </StyledContainer>
  );
}

export default Payment;
