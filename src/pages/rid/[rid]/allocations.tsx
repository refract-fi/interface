import { Layout, RefractLayout } from 'layouts';
import AllocationsModule from 'modules/allocations';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';

const Allocations: NextPageWithLayout = () => {
  return <AllocationsModule />;
};

Allocations.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default Allocations;
