import { Layout, RefractLayout } from 'layouts';
import AllocationsPage from 'modules/allocations/AllocationsPage';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';

const Allocations: NextPageWithLayout = () => {
  return <AllocationsPage />;
};

Allocations.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default Allocations;
