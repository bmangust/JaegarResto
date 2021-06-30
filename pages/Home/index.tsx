import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

interface HomeProps {}

const Home: React.FC<React.HTMLAttributes<HTMLDivElement> & HomeProps> = (
  props
) => {
  const router = useRouter();

  useEffect(() => {
    router.push(encodeURI(`/home/${elements[0]}`), undefined, {
      shallow: true,
    });
  }, []);

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
