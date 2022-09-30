import ConnectionProvider from 'connection/connectionProvider';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import 'theme/global.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <RecoilRoot>
      <ConnectionProvider>{getLayout(<Component {...pageProps} />)}</ConnectionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
