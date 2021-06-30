import { Dish } from '@/store/features/menu/menuSlice';
import styled from 'styled-components';

interface MenuItemProps {
  item: Dish;
  className: string;
}

const StyledMenuItem = styled.div`
  position: relative;
  min-width: 100px;
  min-height: 340px;
  width: 300px;
  margin: 10px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 300;

  & span,
  & img {
    z-index: 2;
    max-width: 80%;
    text-align: center;
  }

  & img {
    width: 70%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  & .bg {
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 80%;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.base.darkerBG};
  }
  & .title {
    flex-grow: 1;
  }
  & .price {
    margin-top: 0.9rem;
    margin-bottom: 0.2rem;
  }
  & .avalible {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <StyledMenuItem>
      <img src={item.image} />
      <span className="title">{item.title}</span>
      <span className="price">{item.price}</span>
      <span className="avalible">{item.avalible} bowls avalible</span>
      <div className="bg" />
    </StyledMenuItem>
  );
};

export default MenuItem;
