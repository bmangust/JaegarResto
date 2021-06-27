import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import '@/styles/globals.css';
import theme from '@/styles/theme';
import { store } from '@/store/store';
import Flex from '@/components/Flex/Flex';
import Sidebar from '@/components/Sidebar/Sidebar';
import PageWrapper from '../components/PageWrapper/PageWrapper';

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
        <Flex
          style={{
            backgroundColor: theme.colors.base.darkBG,
          }}
          alignItems="flex-start"
        >
          <Sidebar />
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        </Flex>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
