import RefractLayout from 'layouts/RefractLayout';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';

const Stats: NextPageWithLayout = () => {
  return <></>;
};

Stats.getLayout = function getLayout(page: ReactNode) {
  return <RefractLayout>{page}</RefractLayout>;
};

export default Stats;
