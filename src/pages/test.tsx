import { Icon } from 'components';
import { Layout } from 'layouts';
import { GeneratingRefract } from 'modules/home';
import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { NextPageWithLayout } from './_app';

const Test: NextPageWithLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Head>
        <title>Refract</title>
      </Head>
      <GeneratingRefract />
    </>
  );
};

Test.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Test;
