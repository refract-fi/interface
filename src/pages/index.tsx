import { Layout } from 'layouts';
import { Landing, Generate, Review } from 'modules/home';
import { ReactNode, useState } from 'react';
import { Box, FlexCol } from 'theme/components';
import { FormPhases } from 'utils/types/formPhase';
import { NextPageWithLayout } from './_app';
import * as styles from 'modules/home/index.css';
import { useRecoilValue } from 'recoil';
import { formPhaseState, useFormPhaseActions } from 'states/formPhasesState';
import { formState, useFormActions } from 'states/formState';
import axios from 'axios';
import { useRouter } from 'next/router';
import useData from 'hooks/useData';

const Home: NextPageWithLayout = () => {
  const { phase } = useRecoilValue(formPhaseState);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { setPhase, resetFormPhase } = useFormPhaseActions();
  const form = useRecoilValue(formState);
  const { push } = useRouter();
  const { resetForm } = useFormActions();

  const fadeOut = (cb: () => void) => {
    setIsFadingOut(true);
    cb();
  };
  const fadeIn = () => {
    setIsFadingOut(false);
  };

  const onGenerateClick = async () => {
    try {
      setTimeout(() => setPhase(FormPhases.GENERATING), 150);
      const response = await axios.post('/api/job', form);
      const start = (Date.now() / 1000).toFixed(0);
      const timer = setInterval(async () => {
        const { data } = await axios(`/api/job/`, { params: { id: response.data.id } });
        if (
          data.status === 'FINISHED' &&
          parseInt((Date.now() / 1000).toFixed(0)) > parseInt(start) + 8
        ) {
          clearInterval(timer);
          // setPhase(FormPhases.COMPLETED);
          const refractView = setTimeout(async () => {
            await push(`/rid/${response.data.id}`);
            await resetForm();
            await resetFormPhase();
          }, 150);
          return () => {
            clearTimeout(refractView);
          };
        }
      }, 1000);
      fadeOut(() => setTimeout(() => fadeIn(), 150));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box
        className={isFadingOut ? styles.fadeOutAnim : styles.fadeInAnim}
        paddingX={{ sm: '2x', md: 'none' }}
      >
        {phase === FormPhases.CREATE && (
          <Landing fadeOut={fadeOut} fadeIn={fadeIn} onGenerateClick={onGenerateClick} />
        )}
        {(phase === FormPhases.REVIEW ||
          phase === FormPhases.GENERATING ||
          phase === FormPhases.COMPLETED) && (
          <FlexCol alignItems={'center'} marginTop='48x'>
            {phase === FormPhases.REVIEW && <Review />}
            {(phase === FormPhases.GENERATING || phase === FormPhases.COMPLETED) && <Generate />}
          </FlexCol>
        )}
      </Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
