import React, { useState } from 'react';
import { AccentType, Theme } from '@/styles/theme';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  height: 52px;
  display: flex;

  & input {
    display: none;
  }
  & .label {
    box-sizing: border-box;
    padding: 14px;
    margin-right: 14px;
    border-radius: 8px;
    box-shadow: none;
    border: ${({ theme }) => '1px solid ' + theme.colors.base.orange};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.8rem;
    text-transform: capitalize;
    white-space: nowrap;
    cursor: pointer;
  }

  & input:checked + .label {
    background-color: ${({
      theme,
      color,
    }: {
      theme: Theme;
      color?: AccentType;
    }) => (color ? theme.colors.accent[color] : theme.colors.primary)};
    box-shadow: ${({ theme }) => '0 8px 24px ' + theme.colors.base.orange};
    border: ${({ theme }) => '1px solid ' + theme.colors.base.orange};
  }
`;

const StyledDiv = styled.div`
  display: flex;
`;

const labels = ['dine in', 'to go', 'delivery'];

function Delivery() {
  const [delivery, setDelivery] = useState('dineIn');

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    setDelivery(id);
  };

  return (
    <StyledDiv>
      {labels.map((label) => (
        <StyledCheckbox key={label}>
          <input
            type="radio"
            name="delivery"
            id={label}
            onChange={handleSelect}
            checked={delivery === label}
          />
          <label className="label" htmlFor={label}>
            {label}
          </label>
        </StyledCheckbox>
      ))}
    </StyledDiv>
  );
}

export default Delivery;
