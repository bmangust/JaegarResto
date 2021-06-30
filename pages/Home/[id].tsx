import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import { selectMenu } from '@/store/features/menu/menuSlice';
import { useAppSelector } from '@/store/hooks';
import MenuList from '../../components/MenuList/MenuList';

interface Props {}

const Route = (props: Props) => {
  const router = useRouter();
  const dishes = useAppSelector(selectMenu);
  console.log(dishes);

  const items = dishes.filter((item) => item.category === router.query.id);

  const elements = [
    'Hot dishes',
    'Cold dishes',
    'Soup',
    'Grill',
    'Appetizer',
    'Dessert',
  ];
  return (
    <>
      <Header />
      <Nav baseRoute="/home" elements={elements} />
      {router.query.id && <MenuList title="Choose dishes" items={items} />}
    </>
  );
};

export default Route;
