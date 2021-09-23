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
  console.log(paths);
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
 * getStaticProps выдает массив блюд для текущей категории
 * мы его сохраняем в state.menu.initialDishes в хуке useEffect при загрузке страницы
 * поиск работает c state.menu.initialDishes, сохраняет в state.menu.dishes
 * компонент MenuList рендерит state.menu.dishes
 *
 * TODO:
 * разобраться, почему на странице home не работает getStaticProps()
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
