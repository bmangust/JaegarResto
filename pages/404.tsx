import Link from 'next/link';
import Flex from '../components/Flex/Flex';

export default function Home() {
  return (
    <Flex direction="column">
      <p>
        <span style={{ fontWeight: 500 }}>404</span>
        {'  |  Nothing is found'}
      </p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </Flex>
  );
}
