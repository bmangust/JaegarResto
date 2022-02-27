import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import '@/styles/globals.css';
import theme from '@/styles/theme';
import { store } from '@/store/store';
import Sidebar from '@/components/Sidebar/Sidebar';
import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Order from '@/components/Order/Order';

const StyledApp = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.base.darkBG};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Jaegar Resto</title>
          <meta name="description" content="Jaegar Resto website" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <StyledApp>
          <Sidebar />
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
          <Order />
        </StyledApp>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
