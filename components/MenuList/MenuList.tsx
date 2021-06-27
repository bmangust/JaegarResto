import styled from 'styled-components';
import { Dish } from '../../store/features/menu/menuSlice';
import MenuItem from '../MenuItem/MenuItem';

interface MenuListProps {
  title: string;
  items: Dish[];
}

const StyledContainer = styled.div<MenuListProps>`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  & .title {
  }

  & .grid {
    display: flex;
    flex-wrap: wrap;
  }

  & .grid .item {
    margin: 10px;
    flex: 1 1 192px;
  }
`;

const MenuList: React.FC<MenuListProps> = (props) => {
  return (
    <StyledContainer {...props}>
      <span className="title">{props.title}</span>
      <div className="grid">
        {props.items.map((item) => (
          <MenuItem key={item.title} className="item" item={item} />
        ))}
      </div>
    </StyledContainer>
  );
};

export default MenuList;
