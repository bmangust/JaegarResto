import Header from '@/components/Header/Header';
import MenuList from '@/components/MenuList/MenuList';
import Nav from '@/components/Nav/Nav';
import { initialDishes, categories } from '@/store/features/menu/initialDishes';
import { Dish, saveMenuSlice } from '@/store/features/menu/menuSlice';
import { useAppDispatch } from '@/store/hooks';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';

interface HomeProps {
  dishes: Dish[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(initialDishes);

  return {
    props: { dishes: initialDishes },
  };
};

const Home: React.FC<React.HTMLAttributes<HTMLDivElement> & HomeProps> = ({
  dishes,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('[HOME]', dishes);
    dispatch(saveMenuSlice({ dishes }));
  }, []);
  return (
    <>
      <Header />
      <Nav baseRoute="/home" elements={categories} />
      <MenuList title="Choose dishes" />
    </>
  );
};

export default Home;
