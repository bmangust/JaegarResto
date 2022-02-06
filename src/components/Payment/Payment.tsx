import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import PaymentMethod from './PaymentMethod';

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

  .payment-header {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .payment-title {
      font-size: max(1.5rem, 24pt);
      margin: 0;
      margin-bottom: 1rem;
    }
  }

  .payment-body {
    flex-grow: 2;
  }

  .payment-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;

function Payment() {
  return (
    <StyledContainer>
      <div className="payment-header">
        <h2 className="payment-title">Payment</h2>
      </div>
      <div className="payment-body">
        <PaymentMethod />
      </div>
      <div className="payment-buttons">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm Payment</Button>
      </div>
    </StyledContainer>
  );
}

export default Payment;
