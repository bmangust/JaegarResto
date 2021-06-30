import styled from 'styled-components';
import { Dish } from '../../store/features/menu/menuSlice';
import MenuItem from '../MenuItem/MenuItem';

interface MenuListProps {
  title: string;
  items: Dish[];
}

const StyledContainer = styled.div<MenuListProps>`
  width: 100%;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.white};

  & > .title {
    font-size: 1.3rem;
  }

  & .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  & .grid .item {
    margin: 10px;
    flex: 1 1 192px;
  }
`;

const MenuList: React.FC<MenuListProps> = (props) => {
  const items = props.items.length ? (
    props.items.map((item) => (
      <MenuItem key={item.id} className="item" item={item} />
    ))
  ) : (
    <p>No items to show</p>
  );
  return (
    <StyledContainer {...props}>
      <span className="title">{props.title}</span>
      <div className="grid">{items}</div>
    </StyledContainer>
  );
};

export default MenuList;
