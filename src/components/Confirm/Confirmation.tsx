import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import CartListFooter from '@/components/Cart/CartListFooter';
import CartList from '@/components/Cart/CartList';
import OrderHeader from '../Order/OrderHeader';
import { ArrowIcon } from '../Icon/Icon';
import { useAppDispatch } from '@/store/hooks';
import { showCartBar } from '@/store/features/toolbar/toolbarSlice';

const StyledContainer = styled(motion.div)`
  position: absolute;
  right: max(30vw, 400px);
  width: max(30vw, 400px);
  height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  z-index: 4;

  .cart-header {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom: 1px solid ${({ theme }) => theme.colors.base.darkLine};
  }

  .title {
    font-size: max(1.5rem, 24pt);
    margin: 0;
  }

  .title2 {
    font-size: max(1.2rem, 16pt);
    margin: 0;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text.gray};
  }
`;

const variants = {
  animate: {
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.1,
    },
  },
  initial: { x: '100%' },
  exit: {
    x: '100%',
  },
};

function Confirmation() {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(showCartBar());
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledContainer key="Confirmation" {...variants}>
        <OrderHeader
          title="Confirmation"
          subtitle="Order #12345"
          icon={<ArrowIcon />}
          onClick={handleBack}
        />
        <CartList hideHeader />
        <CartListFooter />
      </StyledContainer>
    </AnimatePresence>
  );
}

export default Confirmation;
