import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface Props {
  baseRoute: string;
  elements: string[];
}

const StyledNav = styled.ul`
  height: 2rem;
  display: flex;
  list-style: none;
  padding: 0;

  & li {
    color: ${({ theme }) => theme.colors.white};
    text-transform: capitalize;
    margin-right: 2rem;
    font-size: 0.9rem;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
  }

  & li:last-child {
    margin-right: 0;
  }

  & li:hover,
  li:active,
  li:focus,
  .active {
    color: ${({ theme }) => theme.colors.primary};
  }

  & li:active::after,
  li:focus::after,
  .active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    min-width: 40px;
    width: 60%;
    height: 5px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Nav = ({ elements, baseRoute }: Props) => {
  const router = useRouter();
  return (
    <StyledNav>
      {elements.map((el) => {
        const elm = el.replaceAll(' ', '-');
        return (
          <li
            key={el}
            tabIndex={1}
            className={router.query.id === elm ? 'active' : ''}
          >
            <Link href={`${baseRoute}/${elm}`}>
              <a>{el}</a>
            </Link>
          </li>
        );
      })}
    </StyledNav>
  );
};

export default Nav;
