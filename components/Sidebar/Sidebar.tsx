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
import Icon, { LogoutIcon } from '@/components/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const StyledSidebar = styled.div`
  min-height: 100vh;
  width: 104px;
  padding-top: 0.5rem;
  border-radius: 0 8px 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

  const icons: Page[] = [
    'home',
    'discount',
    'pie',
    'message',
    'bell',
    'settings',
  ];

  const handleClick = (name: Page) => {
    dispatch(setCurrentPage(name));
  };

  return (
    <StyledSidebar {...props}>
      <Flex direction="column">
        {icons.map((name) => (
          <Link href={name === 'home' ? '/' : `/${name}`} key={name}>
            <a tabIndex={0} style={{ zIndex: active === name ? 2 : 1 }}>
              <Icon
                onClick={() => handleClick(name)}
                icon={name}
                active={active === name}
              />
            </a>
          </Link>
        ))}
      </Flex>
      <LogoutIcon active={false} />
    </StyledSidebar>
  );
};

export default Sidebar;
