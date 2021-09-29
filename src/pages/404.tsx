import Link from 'next/link';
import styled from 'styled-components';
import Flex from '../components/Flex/Flex';

const StyledFlex = styled(Flex)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;

  & span {
    font-weight: 800;
  }

  & a {
    margin-top: 1rem;
  }
`;

export default function Home() {
  return (
    <StyledFlex direction="column">
      <p>
        <span>404</span>
        {'  |  Nothing is found'}
      </p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </StyledFlex>
  );
}
