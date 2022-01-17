import { Dish } from '@/store/features/menu/menuSlice';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { useAppDispatch } from '@/store/hooks';
import { addItemToCart } from '@/store/features/cart/cartSlice';
import Discount from './Discount';
import Price from './Price';

interface MenuItemProps {
  item: Dish;
  className: string;
}

const StyledMenuItem = styled(motion.div)`
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
  cursor: pointer;

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
  & .avalible {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const variants = {
  animate: {
    opacity: 1,
    scale: 1,
  },
  initial: { opacity: 0, scale: 0.5 },
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(addItemToCart(item));
  };
  return (
    <StyledMenuItem onClick={handleClick} {...variants}>
      <img src={item.image} />
      <span className="title">{item.title}</span>
      <Price price={item.price} discount={item.discount} />
      <span className="avalible">{item.avalible} bowls avalible</span>
      <Discount discount={item.discount} />
      <div className="bg" />
    </StyledMenuItem>
  );
};

export default MenuItem;
