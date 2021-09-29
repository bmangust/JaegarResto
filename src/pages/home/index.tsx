import Header from '@/components/Header/Header';
import MenuList from '@/components/MenuList/MenuList';
import Nav from '@/components/Nav/Nav';
import { categories } from '@/store/features/menu/initialDishes';

const Home = () => {
  return (
    <>
      <Header />
      <Nav baseRoute="/home" elements={categories} />
      <MenuList title="Choose dishes" />
    </>
  );
};

export default Home;
