import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector } from '@/store/hooks';
import CartItem from './CartItem';

const StyledDiv = styled(motion.div)`
  margin-top: 10px;
  max-height: calc(100vh - 148px - 75px);
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const infoVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

function CartList() {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <StyledDiv {...variants} layout>
      <AnimatePresence>
        {items.map((el) => (
          <CartItem item={el} key={el.item.id} />
        ))}
      </AnimatePresence>
      {items.length === 0 && (
        <motion.div {...infoVariants}>Add some items to cart</motion.div>
      )}
    </StyledDiv>
  );
}

export default CartList;
