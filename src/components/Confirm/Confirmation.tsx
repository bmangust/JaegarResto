import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import CartListFooter from '@/components/Cart/CartListFooter';
import CartList from '@/components/Cart/CartList';
import OrderHeader from '../Order/OrderHeader';
import { ArrowIcon } from '../Icon/Icon';

const StyledContainer = styled(motion.div)`
  width: max(30vw, 400px);
  height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;

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

function Confirmation() {
  return (
    <StyledContainer>
      <OrderHeader
        title="Confirmation"
        subtitle="Order #12345"
        icon={<ArrowIcon />}
      />
      <CartList hideHeader />
      <CartListFooter />
    </StyledContainer>
  );
}

export default Confirmation;
