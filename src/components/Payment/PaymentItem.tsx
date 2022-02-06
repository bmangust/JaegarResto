import theme from '@/styles/theme';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { CashIcon, CreditCardIcon, PayPalIcon, TickIcon } from '../Icon/Icon';
import { PaymentVariant } from './PaymentMethod';

interface Props {
  active?: boolean;
  name: PaymentVariant;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StyledDiv = styled.div<Partial<Props>>`
  .radioButton {
    display: none;
  }
  .button-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: ${({ theme, active }) =>
      active ? theme.colors.base.darkBG : theme.colors.base.darkerBG};
    color: ${({ active, theme }) =>
      active ? theme.colors.white : theme.colors.text.light};
    border-radius: 10px;
    border: 1px solid
      ${({ active, theme }) =>
        active ? theme.colors.text.light : theme.colors.base.darkLine};
    .tick {
      position: absolute;
      right: 0.5rem;
      top: 0;
      padding: 0.1rem;
    }
  }
`;

const PaymentItem = ({ name, active, onChange }: Props) => {
  const showIcon = (name: PaymentVariant) => {
    if (name === 'Cash') return <CashIcon active={active} />;
    if (name === 'PayPal') return <PayPalIcon active={active} />;
    return <CreditCardIcon active={active} />;
  };
  return (
    <StyledDiv active={active}>
      <input
        type="radio"
        id={name}
        onChange={onChange}
        value={name}
        name="payment"
        className="radioButton"
      />
      <label htmlFor={name}>
        <div className="button-wrapper">
          {showIcon(name)}
          {active && (
            <TickIcon color={theme.colors.primary} active className="tick" />
          )}
          <span className="button-text">{name}</span>
        </div>
      </label>
    </StyledDiv>
  );
};

export default PaymentItem;
