import Header from '@/components/Header/Header';

interface HomeProps {}

const Home: React.FC<React.HTMLAttributes<HTMLDivElement> & HomeProps> = (
  props
) => {
  return (
    <>
      <Header />
      Home
    </>
  );
};

export default Home;
