import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

interface PageWrapperProps {
  children?: React.ReactNode;
}

const StyledPageWrapper = styled.div<PageWrapperProps>`
  min-height: 100vh;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const PageWrapper: React.FC<
  React.HTMLAttributes<HTMLDivElement> & PageWrapperProps
> = (props) => {
  return <StyledPageWrapper>{props.children}</StyledPageWrapper>;
};

export default PageWrapper;
