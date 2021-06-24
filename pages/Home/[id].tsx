import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';

interface Props {}

const Route = (props: Props) => {
  const router = useRouter();

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
      {router.query.id}
    </>
  );
};

export default Route;
