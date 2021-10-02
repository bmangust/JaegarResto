import React from 'react';
import styled from 'styled-components';

export type InputProps = {
  width?: string;
  color?: string;
};

type Props = InputProps & {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  icon?: JSX.Element;
};

const StyledInput = styled.div<InputProps>`
  display: flex;
  align-items: center;
  height: 2.8rem;
  padding: 1rem 0.7rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.base.darkLine};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.base.formBG};

  & input {
    border: none;
    outline: none;
    padding: 0.5rem;
    background-color: inherit;
    color: ${({ color, theme }) => color || theme.colors.text.light};
    font-weight: 100;
    font-size: 0.85rem;
    width: ${({ width = '240px' }) => width};
  }
`;

const Input = (props: Props) => {
  return (
    <StyledInput className={props.className} width={props.width}>
      {props.icon}
      <input
        //   width=""
        value={props.value}
        onKeyPress={props.onKeyPress}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </StyledInput>
  );
};

export default Input;
