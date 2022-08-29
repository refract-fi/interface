import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/brand/refract_logo.svg' sizes='any' type='image/svg+xml' />
      </Head>
      {children}
    </>
  );
};

export default Layout;
