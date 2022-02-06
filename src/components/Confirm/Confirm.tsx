import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button/Button';

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
`;

function Confirm() {
  return (
    <StyledContainer>
      <div className="cart-header">
        <h2 className="title">Order #12345</h2>
      </div>
      <Button>Continue to Payment</Button>
    </StyledContainer>
  );
}

export default Confirm;