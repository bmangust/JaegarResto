import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';

interface HomeProps {}

const Home: React.FC<React.HTMLAttributes<HTMLDivElement> & HomeProps> = (
  props
) => {
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
      Home
    </>
  );
};

export default Home;
