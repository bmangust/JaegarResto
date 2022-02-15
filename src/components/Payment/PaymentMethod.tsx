import React, { ChangeEvent, useState } from 'react';
import PaymentItem from './PaymentItem';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .paymentMethod-header {
    color: ${({ theme }) => theme.colors.white};
  }
  .paymentMethod-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    flex-wrap: nowrap;
  }
`;

const PAYMENTS = ['Credit Card', 'PayPal', 'Cash'] as const;
export type PaymentVariant = typeof PAYMENTS[number];

const PaymentMethod = () => {
  const [payment, setPayment] = useState<PaymentVariant>(PAYMENTS[0]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPayment(e.currentTarget.value as PaymentVariant);
  };
  return (
    <StyledDiv>
      <h3 className="paymentMethod-header">Payment Method</h3>
      <div className="paymentMethod-items">
        {PAYMENTS.map((item) => (
          <PaymentItem
            key={item}
            name={item}
            active={payment === item}
            onChange={onChange}
          />
        ))}
      </div>
    </StyledDiv>
  );
};

export default PaymentMethod;
