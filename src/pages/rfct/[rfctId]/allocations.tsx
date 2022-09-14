import { Layout, RefractLayout } from 'layouts';
import AllocationBlocks from 'modules/allocations/AllocationBlocks/AllocationBlocks';
import AllocationSpread from 'modules/allocations/AllocationSpread/AllocationSpread';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { FlexCol } from 'theme/components';

const Allocations: NextPageWithLayout = () => {
  return (
    <FlexCol width={'full'} marginX='24x' alignItems={'center'}>
      <AllocationSpread />
      <AllocationBlocks />
    </FlexCol>
  );
};

Allocations.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default Allocations;
