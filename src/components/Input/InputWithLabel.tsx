import { ChangeEvent } from 'react';
import styled from 'styled-components';
import Input from './Input';
import classnames from 'classnames';
import { StateKeys } from '@/components/Payment/CardDetails';
import Select from './Select';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  .label {
    font-size: 1rem;
  }

  .fullWidth {
    width: 100%;
  }
`;

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: StateKeys;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  value: string;
  values?: string[];
  type?: 'text' | 'date' | 'password' | 'select';
  className?: string;
}

const InputWithLabel = ({
  id,
  label,
  value,
  values,
  type,
  onChange,
  className,
}: InputWithLabelProps) => {
  return type === 'select' ? (
    <StyledInput>
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <Select
        id={id}
        value={value}
        values={values}
        onChange={onChange}
        type={type}
        className={classnames('fullWidth', className)}
      />
    </StyledInput>
  ) : (
    <StyledInput>
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className={classnames('fullWidth', className)}
      />
    </StyledInput>
  );
};

export default InputWithLabel;
