import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '@/components/Button/Button';
import Delivery from '@/components/Delivery/Delivery';
import CartList from './CartList';
import CartListFooter from './CartListFooter';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { showPaymentBar } from '@/store/features/toolbar/toolbarSlice';
import CartListHeader from './CartListHeader';

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
  },
};

const Cart = ({ className }: Partial<HTMLDivElement>) => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handlePayment = () => {
    dispatch(showPaymentBar());
  };
  return (
    <motion.div className={className} key="Cart" {...variants}>
      <div className="content-header">
        <h2 className="content-title">Order #12345</h2>
        <Delivery />
        <CartListHeader />
      </div>
      <div className="content-body">
        <CartList />
      </div>
      <CartListFooter />
      <Button disabled={items.length === 0} onClick={handlePayment}>
        Continue to Payment
      </Button>
    </motion.div>
  );
};

export default Cart;
