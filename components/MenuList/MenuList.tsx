import styled from 'styled-components';
import { Dish } from '../../store/features/menu/menuSlice';
import MenuItem from '../MenuItem/MenuItem';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface MenuListProps {
  title: string;
  items: Dish[];
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

const list = {
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
};

const MenuList: React.FC<MenuListProps> = (props) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [props.items]);

  const items = props.items.length ? (
    props.items.map((item) => (
      <MenuItem key={item.id} className="item" item={item} />
    ))
  ) : (
    <p>No items to show</p>
  );

  console.log(props.items);

  return (
    <StyledContainer>
      <span className="title">{props.title}</span>
      <motion.div
        className="grid"
        variants={list}
        animate={controls}
        initial="hidden"
        exit="exit"
      >
        {items}
      </motion.div>
    </StyledContainer>
  );
};

export default MenuList;
