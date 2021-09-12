import React from 'react';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import { Dish } from '@/store/features/menu/menuSlice';
import MenuList from '../../components/MenuList/MenuList';
import { GetStaticProps } from 'next';
import { initialDishes, categories } from '@/store/features/menu/initialDishes';

interface Props {
  items: Dish[];
}

export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: {
      id: category.replaceAll(' ', '-'),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = `${params?.id}`;
  const items = initialDishes.filter(
    (item) => item.category.replaceAll(' ', '-') === params?.id
  );
  return {
    props: { items },
  };
};

const Route = ({ items }: Props) => {
  return (
    <>
      <Header />
      <Nav baseRoute="/home" elements={categories} />
      <MenuList title="Choose dishes" items={items} />
    </>
  );
};

export default Route;
