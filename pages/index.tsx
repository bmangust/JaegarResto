import { initialDishes } from '@/store/features/menu/initialDishes';
import { Dish, saveMenuSlice } from '@/store/features/menu/menuSlice';
import { useAppDispatch } from '@/store/hooks';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import HomePage from './home';

interface HomeProps {
  dishes: Dish[];
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { dishes: initialDishes },
  };
};

export default function Home({ dishes }: HomeProps) {
  const dispatch = useAppDispatch();

  // save all the dishes to show on main page
  useEffect(() => {
    dispatch(saveMenuSlice({ dishes }));
  }, []);
  return <HomePage />;
}
