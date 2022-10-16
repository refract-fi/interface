import { Layout } from 'layouts';
import { Landing, Generate } from 'modules/home';
import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { Box, Flex, FlexCol } from 'theme/components';
import { FormPhases } from 'utils/types/formPhase';
import { NextPageWithLayout } from './_app';
import * as styles from 'modules/home/index.css';
import { useRecoilValue } from 'recoil';
import { formPhaseState } from 'states/formPhasesState';
import Completed from 'modules/home/Completed/Completed';
import { Title } from 'components';
import { title } from 'modules/home/Landing/Landing.css';

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
      <FlexCol height='100vh' width='100vw' alignItems={'center'} justifyContent='center'>
        <Title special level={{ sm: '2', md: '0' }} weight={'bold'} className={title}>
          REFRACT
        </Title>
        <Title
          level={{ sm: '6', md: '4' }}
          marginTop={{ sm: '4x', md: '6x' }}
          textTransform='uppercase'
        >
          Coming Soon
        </Title>
      </FlexCol>
      {/* <Box className={isFadingOut ? styles.fadeOutAnim : styles.fadeInAnim}>
        {phase === FormPhases.CREATE && <Landing fadeOut={fadeOut} fadeIn={fadeIn} />}
        {(phase === FormPhases.REVIEW || phase === FormPhases.GENERATING) && (
          <FlexCol alignItems={'center'} marginTop='48x'>
            <Generate />
          </FlexCol>
        )}
        {phase === FormPhases.COMPLETED && <Completed />}
      </Box> */}
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
