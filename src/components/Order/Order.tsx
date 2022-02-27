import styled from 'styled-components';
import Payment from '@/components/Payment/Payment';
import Confirmation from '@/components/Confirm/Confirmation';
import { useAppSelector } from '@/store/hooks';
import Cart from '../Cart/Cart';
import { AnimatePresence, motion } from 'framer-motion';

const StyledDiv = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
  max-height: 100vh;
  display: flex;
  justify-content: flex-end;

  .overlay {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background-color: #000000aa;
  }
`;

const variants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  initial: { opacity: 0 },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
    },
  },
};

const Order = () => {
  const currentView = useAppSelector((state) => state.toolbar.orderBar);
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {currentView === 'cart' ? (
        <Cart />
      ) : (
        <StyledDiv>
          <Confirmation />
          <Payment />
          <motion.div {...variants} className="overlay" />
        </StyledDiv>
      )}
    </AnimatePresence>
  );
};

export default Order;
