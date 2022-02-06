import React, { ChangeEvent, useState } from 'react';
import PaymentItem from './PaymentItem';
import styled from 'styled-components';

interface Props {}

const StyledDiv = styled.div`
  .paymentMethod-header {
    color: ${({ theme }) => theme.colors.text.light};
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

const PaymentMethod = (props: Props) => {
  const [payment, setPayment] = useState<PaymentVariant>(PAYMENTS[0]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setPayment(e.currentTarget.value as PaymentVariant);
  };
  return (
    <StyledDiv>
      <h3 className="paymentMethod-header">Payment Method</h3>
      <div className="paymentMethod-items">
        {PAYMENTS.map((item) => (
          <PaymentItem
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
