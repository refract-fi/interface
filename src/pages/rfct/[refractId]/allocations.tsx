import RefractLayout from 'layouts/RefractLayout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';

const Allocations: NextPageWithLayout = () => {
  return <></>;
};

Allocations.getLayout = function getLayout(page: ReactNode) {
  return <RefractLayout>{page}</RefractLayout>;
};

export default Allocations;
