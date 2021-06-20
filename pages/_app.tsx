import '../styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
