import React, { useEffect } from 'react';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import { Dish, saveMenuSlice } from '@/store/features/menu/menuSlice';
import MenuList from '../../components/MenuList/MenuList';
import { GetStaticProps } from 'next';
import { initialDishes, categories } from '@/store/features/menu/initialDishes';
import { useAppDispatch } from '@/store/hooks';

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
  const items = initialDishes.filter(
    (item) => item.category.replaceAll(' ', '-') === params?.id
  );
  return {
    props: { items, initialDishes },
  };
};

/**
 * 1. getStaticProps passes Dish array into this page for every category
 * 2. saveMenuSlice saves it into state.menu.initialDishes redux state
 * 3. search users state.menu.initialDishes, saves reslts in state.menu.dishes
 * 4. MenuList renders state.menu.dishes
 */

const Route = ({ items }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(items);
    dispatch(saveMenuSlice({ dishes: items }));
  }, [items]);

  return (
    <>
      <Header />
      <Nav baseRoute="/home" elements={categories} />
      <MenuList title="Choose dishes" />
    </>
  );
};

export default Route;
