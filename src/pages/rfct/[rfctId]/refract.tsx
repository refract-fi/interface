import { Layout, RefractLayout } from 'layouts';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { Box } from 'theme/components';

const Refraction: NextPageWithLayout = () => {
  return <Box>This is a test</Box>;
};

Refraction.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default Refraction;
