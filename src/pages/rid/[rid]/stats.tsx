import { Layout, RefractLayout } from 'layouts';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { Box, FlexCol } from 'theme/components';
import { basicFadeIn } from 'theme/animations.css';
import { Text } from 'components';

const Stats: NextPageWithLayout = () => {
  return (
    <FlexCol className={basicFadeIn} alignItems='center'>
      <Text marginBottom={'2x'}>Stats Page 📊</Text>
      <img src='/placeholders/stats_page_placeholder.gif' />
    </FlexCol>
  );
};

Stats.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default Stats;
