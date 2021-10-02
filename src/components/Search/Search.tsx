import { searchDishes } from '@/store/features/menu/menuSlice';
import { useAppDispatch } from '@/store/hooks';
import React, { useState } from 'react';
import Input from '@/components/Input/Input';
import SearchIcon from './SearchIcon';

interface SearchProps {
  onSubmit: (value: string) => void;
}

const Search = (props: SearchProps) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setValue(e.currentTarget.value);
    dispatch(searchDishes({ search: e.currentTarget.value }));
  };
  const handlePress = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <Input
      icon={<SearchIcon />}
      value={value}
      onChange={handleChange}
      onKeyPress={handlePress}
      placeholder="Search for food, coffe, etc.."
    />
  );
};

export default Search;
