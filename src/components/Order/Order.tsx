import styled from 'styled-components';
import Payment from '@/components/Payment/Payment';
import Confirmation from '@/components/Confirm/Confirmation';
import { useAppSelector } from '@/store/hooks';
import Cart from '../Cart/Cart';
import { AnimatePresence, motion } from 'framer-motion';

const StyledContainer = styled.div`
  width: 35vw;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};
  color: ${({ theme }) => theme.colors.white};
  z-index: 5;

  .content {
    padding: 24px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-left: 1px solid ${({ theme }) => theme.colors.base.darkLine};
    z-index: 6;

    .content-header {
      min-height: 130px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .content-title {
        font-size: max(1.5rem, 24pt);
        margin: 0;
        margin-bottom: 1rem;
      }
    }

    .content-body {
      flex-grow: 2;
      overflow-y: scroll;
    }
  }
  .overlay {
    position: absolute;
    right: 35vw;
    top: 0;
    z-index: 2;
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
    <StyledContainer>
      <AnimatePresence initial={false} exitBeforeEnter>
        {currentView === 'cart' ? (
          <Cart className="content" />
        ) : (
          <Payment className="content" />
        )}
        {currentView === 'payment' && <Confirmation className="content" />}
        {currentView === 'payment' && (
          <motion.div {...variants} className="overlay" />
        )}
      </AnimatePresence>
    </StyledContainer>
  );
};

export default Order;
