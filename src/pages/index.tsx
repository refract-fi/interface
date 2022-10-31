import { Layout } from 'layouts';
import { Landing, Generate, Review } from 'modules/home';
import { ReactNode, useState } from 'react';
import { Box, FlexCol } from 'theme/components';
import { FormPhases } from 'utils/types/formPhase';
import { NextPageWithLayout } from './_app';
import * as styles from 'modules/home/index.css';
import { useRecoilValue } from 'recoil';
import { formPhaseState } from 'states/formPhasesState';

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
      <Box
        className={isFadingOut ? styles.fadeOutAnim : styles.fadeInAnim}
        paddingX={{ sm: '2x', md: 'none' }}
      >
        {phase === FormPhases.CREATE && <Landing fadeOut={fadeOut} fadeIn={fadeIn} />}
        <FlexCol alignItems={'center'} marginTop='48x'>
          {phase === FormPhases.REVIEW && <Review />}
          {(phase === FormPhases.GENERATING || phase === FormPhases.COMPLETED) && <Generate />}
        </FlexCol>
      </Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
