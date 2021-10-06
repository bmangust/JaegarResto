import styled from 'styled-components';
import MenuItem from '../MenuItem/MenuItem';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';

interface MenuListProps {
  title: string;
}

const StyledContainer = styled(motion.div)`
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

const variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    x: 1000,
  },
};

const MenuList: React.FC<MenuListProps> = (props) => {
  const dishes = useAppSelector((state) => state.menu.dishes);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [dishes]);

  const items = dishes?.length ? (
    dishes.map((item) => (
      <MenuItem key={item.id} className="item" item={item} />
    ))
  ) : (
    <p>No items to show</p>
  );

  return (
    <StyledContainer>
      <span className="title">{props.title}</span>
      <motion.div
        className="grid"
        variants={variants}
        animate={controls}
        initial="hidden"
        exit="exit"
      >
        <AnimatePresence>{items}</AnimatePresence>
      </motion.div>
    </StyledContainer>
  );
};

export default MenuList;
