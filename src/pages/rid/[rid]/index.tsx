import { Layout, RefractLayout } from 'layouts';
import RefractModule from 'modules/refract';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { Box } from 'theme/components';

const RefractPage: NextPageWithLayout = () => {
  return <RefractModule />;
};

RefractPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default RefractPage;
