import Header from '@/components/Header/Header';
import MenuList from '@/components/MenuList/MenuList';
import Nav from '@/components/Nav/Nav';
import { initialDishes, categories } from '@/store/features/menu/initialDishes';

interface HomeProps {}

const Home: React.FC<React.HTMLAttributes<HTMLDivElement> & HomeProps> = (
  props
) => {
  return (
    <>
      <Header />
      <Nav baseRoute="/home" elements={categories} />
      <MenuList title="Choose dishes" items={initialDishes} />
    </>
  );
};

export default Home;
