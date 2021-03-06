import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  isPage,
  Page,
  selectCurrentPage,
  setCurrentPage,
} from '@/store/features/toolbar/toolbarSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import SidebarIcon, { LogoutIcon } from '@/components/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const StyledSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  width: 125px;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.base.darkerBG};

  .logout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .logout-icon {
    padding-right: 1.2rem;
  }
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
      {/* <div> */}
      {icons.map((name) => (
        <Link href={name === 'home' ? '/' : `/${name}`} key={name}>
          <a tabIndex={0} style={{ zIndex: active === name ? 2 : 1 }}>
            <SidebarIcon
              onClick={() => handleClick(name)}
              icon={name}
              width="3.5rem"
              active={active === name}
              className={active === name ? 'active' : ''}
            />
          </a>
        </Link>
      ))}
      {/* </div> */}
      <div className="logout">
        <LogoutIcon width="3.5rem" active={false} />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
