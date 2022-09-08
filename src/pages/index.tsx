import { Layout } from 'layouts';
import { Generating, Landing, Review } from 'modules/home';
import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { Box, FlexCol } from 'theme/components';
import { FormPhases } from 'utils/types/formPhase';
import { NextPageWithLayout } from './_app';
import * as styles from 'modules/home/index.css';
import { useRecoilValue } from 'recoil';
import { formPhaseState } from 'states/formPhasesState';
import { Title } from 'components';
import Completed from 'modules/home/Completed/Completed';

const Home: NextPageWithLayout = () => {
  const { phase } = useRecoilValue(formPhaseState);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const fadeOut = (cb: () => void) => {
    setIsFadingOut(true);
    cb();
  };
  const fadeIn = () => {
    setIsFadingOut(false);
  };

  return (
    <>
      <Head>
        <title>Refract</title>
      </Head>
      <Box className={isFadingOut ? styles.fadeOutAnim : styles.fadeInAnim}>
        {phase === FormPhases.CREATE && <Landing fadeOut={fadeOut} fadeIn={fadeIn} />}
        {(phase === FormPhases.REVIEW || phase === FormPhases.GENERATING) && (
          <FlexCol alignItems={'center'} marginTop='48x'>
            {phase === FormPhases.REVIEW && <Review />}
            {phase === FormPhases.GENERATING && <Generating />}
          </FlexCol>
        )}
        {phase === FormPhases.COMPLETED && <Completed />}
      </Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
