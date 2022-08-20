import { RefractLayout } from 'layouts';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { Box } from 'theme/components';

const Spectrum: NextPageWithLayout = () => {
  return <Box>This is a test</Box>;
};

Spectrum.getLayout = function getLayout(page: ReactNode) {
  return <RefractLayout>{page}</RefractLayout>;
};

export default Spectrum;
