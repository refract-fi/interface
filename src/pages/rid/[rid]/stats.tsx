import { Refract } from 'components';
import { RefractPhases } from 'components/Refract/Refract';
import { Layout, RefractLayout } from 'layouts';
import { fadeInAnim } from 'modules/refract/index.css';
import RefractFadeZone from 'modules/refract/RefractFadeZone';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { refractState } from 'states/refractState';
import { Box } from 'theme/components';

const Stats: NextPageWithLayout = () => {
  const { refractPhase, refractFade } = useRecoilValue(refractState);
  return (
    <>
      {' '}
      <Box position={'absolute'}>
        <Refract phase={refractPhase} />
        {refractFade && (
          <Box className={fadeInAnim}>
            <RefractFadeZone />
          </Box>
        )}
      </Box>
      I like cheese
    </>
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
