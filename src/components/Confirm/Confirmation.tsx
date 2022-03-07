import { motion } from 'framer-motion';
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
  right: 35vw;
  width: 35vw;
  height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  z-index: 3;
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

function Confirmation({ className }: Partial<HTMLDivElement>) {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(showCartBar());
  };
  return (
    <StyledContainer className={className} key="Confirmation" {...variants}>
      <OrderHeader
        title="Confirmation"
        subtitle="Order #12345"
        icon={<ArrowIcon />}
        onClick={handleBack}
        className="content-header"
      />
      <div className="content-body">
        <CartList />
      </div>
      <CartListFooter />
    </StyledContainer>
  );
}

export default Confirmation;
