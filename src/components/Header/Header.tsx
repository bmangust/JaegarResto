import styled from 'styled-components';
import { formatTime } from '../../util';
import Search from '@/components/Search/Search';
import Title from './Title';

interface HeaderProps {}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-search {
    width: 14rem;
  }
`;

const Header = (props: HeaderProps) => {
  const date = formatTime(new Date(), 'dddd, DD MMM YYYY');
  return (
    <StyledHeader>
      <Title mainText="Jaegar Resto" secondaryText={date} />
      <Search
        className="header-search"
        onSubmit={(value) => console.log(value)}
      />
    </StyledHeader>
  );
};

export default Header;
