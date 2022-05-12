import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import InputWithLabel from '../Input/InputWithLabel';
import { isEmpty, isNumeric } from 'src/util';
import {
  deliveryLabels,
  DeliveryType,
  updatePayment,
} from '@/store/features/payment/paymentSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

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

  .client,
  .block,
  .orderType {
    display: flex;
    gap: 0.7rem;
    width: 100%;
  }

  .client {
    flex-direction: column;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.base.darkLine};
  }
`;

const CardDetails = () => {
  const state = useAppSelector((state) => state.payment);
  const dispatch = useAppDispatch();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch(updatePayment({ e }));
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
            type="password"
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
          label="Delivery"
          values={[...deliveryLabels]}
        />
        <InputWithLabel
          id="table"
          type="select"
          value={state?.table || ''}
          onChange={handleInputChange}
          label="Table"
          values={new Array(10).fill('').map((_, i) => i.toString())}
        />
      </div>
    </StyledDiv>
  );
};

export default CardDetails;
