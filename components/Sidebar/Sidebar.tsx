import React from 'react';
import styled from 'styled-components';
import {
  Page,
  selectCurrentPage,
  setCurrentPage,
} from '../../store/features/toolbar/toolbarSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Flex from '../Flex/Flex';
import Icon from '../Icon/Icon';

const StyledSidebar = styled.div`
  min-height: 100vh;
  width: 104px;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};
`;

const Sidebar: React.FC = (props) => {
  const active = useAppSelector(selectCurrentPage);
  const dispatch = useAppDispatch();

  const icons: Page[] = [
    'Home',
    'Discount',
    'Pie',
    'Message',
    'Bell',
    'Settings',
  ];

  const handleClick = (name: Page) => {
    dispatch(setCurrentPage(name));
  };

  return (
    <StyledSidebar {...props}>
      <Flex direction="column">
        {icons.map((name) => (
          <Icon
            onClick={() => handleClick(name)}
            key={name}
            icon={name}
            active={active === name}
          />
        ))}
      </Flex>
    </StyledSidebar>
  );
};

export default Sidebar;
