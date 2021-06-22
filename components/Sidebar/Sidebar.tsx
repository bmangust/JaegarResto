import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  isPage,
  Page,
  selectCurrentPage,
  setCurrentPage,
} from '@/store/features/toolbar/toolbarSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Flex from '@/components/Flex/Flex';
import Icon from '@/components/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const StyledSidebar = styled.div`
  min-height: 100vh;
  width: 104px;
  padding-top: 0.5rem;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};
`;

const Sidebar: React.FC = (props) => {
  const router = useRouter();
  const active = useAppSelector(selectCurrentPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const path = router.route.split('/')[1];
    if (isPage(path)) setCurrentPage(path);
  }, []);

  console.log(router);

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
          <Link href={name === 'Home' ? '/' : `/${name}`} key={name}>
            <a style={{ zIndex: active === name ? 2 : 1 }}>
              <Icon
                onClick={() => handleClick(name)}
                icon={name}
                active={active === name}
              />
            </a>
          </Link>
        ))}
      </Flex>
    </StyledSidebar>
  );
};

export default Sidebar;
