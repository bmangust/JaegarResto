import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';

interface SearchProps {
  onSubmit: (value: string) => void;
}

const StyledSearch = styled.div`
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
    color: ${({ theme }) => theme.colors.text.light};
    font-weight: 100;
    font-size: 0.85rem;
    width: 240px;
  }
`;

const Search = (props: SearchProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setValue(e.currentTarget.value);
  };
  const handlePress = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <StyledSearch>
      <SearchIcon />
      <input
        value={value}
        onKeyPress={handlePress}
        onChange={handleChange}
        placeholder="Search for food, coffe, etc.."
      />
    </StyledSearch>
  );
};

export default Search;
