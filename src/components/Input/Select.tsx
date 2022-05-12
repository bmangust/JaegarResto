import React from 'react';
import styled from 'styled-components';

export type InputProps = {
  width?: string;
  color?: string;
  align?: 'center' | 'left' | 'right';
  values?: string[];
};

type Props = InputProps &
  React.InputHTMLAttributes<HTMLSelectElement> & {
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    className?: string;
    icon?: JSX.Element;
  };

const StyledSelect = styled.select<InputProps>`
  display: flex;
  align-items: center;
  height: 2.8rem;
  padding: 1rem 0.7rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.base.darkLine};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.base.formBG};
  color: ${({ color, theme }) => color || theme.colors.text.light};
  font-weight: 100;
  font-size: 0.85rem;
  width: 100%;
  text-align: ${({ align = 'left' }) => align};
  padding: 0.5rem;
  border: none;
  outline: none;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }
`;

const Select = (props: Props) => {
  return (
    <StyledSelect
      {...props}
      value={props.value}
      onKeyPress={props.onKeyPress}
      onChange={props.onChange}
      placeholder={props.placeholder}
    >
      {props.values?.map((value) => (
        <option className="option" key={value}>
          {value}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
