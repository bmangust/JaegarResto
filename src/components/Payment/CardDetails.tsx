import React, { ChangeEvent, useState } from 'react';
import { DeliveryType } from '@/store/features/cart/cartSlice';
import styled from 'styled-components';
import InputWithLabel from '../Input/InputWithLabel';
import { isEmpty, isNumeric } from 'src/util';

interface State {
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  orderType: DeliveryType;
  table?: string;
}

export type StateKeys = keyof State;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
  margin-top: 1rem;

  .block,
  .orderType {
    display: flex;
    gap: 1rem;
  }

  .client {
    padding-bottom: 0.7rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.base.darkLine};
  }
`;

const CardDetails = () => {
  const [state, setState] = useState<State>({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    orderType: 'dine in',
    table: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      (e.target.id === 'cardNumber' || e.target.id === 'cvv') &&
      !isEmpty(e.target.value) &&
      !isNumeric(e.target.value)
    )
      return;
    setState({
      ...state,
      [e.target.id as StateKeys]: e.target.value.toLocaleUpperCase(),
    });
  };
  return (
    <StyledDiv>
      <div className="client">
        <InputWithLabel
          id="cardholderName"
          value={state?.cardholderName}
          onChange={handleInputChange}
          label="Cardholder Name"
          className="CardDetails-input"
        />
        <InputWithLabel
          id="cardNumber"
          value={state?.cardNumber}
          onChange={handleInputChange}
          label="Card Number"
          className="CardDetails-input"
        />
        <div className="block">
          <InputWithLabel
            id="expirationDate"
            value={state?.expirationDate}
            onChange={handleInputChange}
            label="Expiration Date"
          />

          <InputWithLabel
            id="cvv"
            value={state?.cvv}
            onChange={handleInputChange}
            label="CVV"
          />
        </div>
      </div>
      <div className="orderType">
        <InputWithLabel
          id="orderType"
          type="select"
          value={state?.orderType}
          onChange={handleInputChange}
          label="Order Type"
        />
        <InputWithLabel
          id="table"
          type="select"
          value={state?.table || ''}
          onChange={handleInputChange}
          label="Table"
        />
      </div>
    </StyledDiv>
  );
};

export default CardDetails;
