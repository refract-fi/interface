import { Layout, RefractLayout } from 'layouts';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';

const Stats: NextPageWithLayout = () => {
  return <></>;
};

Stats.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default Stats;
