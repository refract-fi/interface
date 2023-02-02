import clsx from 'clsx';
import { BorderButton, Button, Chips, Refract, Text, Title } from 'components';
import BorderInput from 'components/BorderInput/BorderInput';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { formPhaseState, useFormPhaseActions } from 'states/formPhasesState';
import { formState } from 'states/formState';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import { formatMoment } from 'utils/func';
import { getBorderColor } from 'utils/func/getBorderColor';
import { FormPhases } from 'utils/types/formPhase';
import { fadeOutAnim } from '../index.css';
import FormOption from './components/FormOption/FormOption';
import * as styles from './Generate.css';

const ReviewForm = () => {
  const { phase } = useRecoilValue(formPhaseState);
  const { setPhase } = useFormPhaseActions();
  const [loadingText, setLoadingText] = useState('Retrieving Balances...');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { push } = useRouter();
  const { resetFormPhase } = useFormPhaseActions();

  const fadeOut = (cb: () => void) => {
    setIsFadingOut(true);
    cb();
  };
  const fadeIn = () => {
    setIsFadingOut(false);
  };

  async function loadingAnimation() {
    for (const string of [
      'Retrieving Balances',
      'Aggregating Results',
      'Anonymizing your finances',
    ]) {
      setLoadingText(string);
      await new Promise(r => setTimeout(r, 2666));
    }
  }
  useEffect(() => {
    loadingAnimation();
  }, [phase]);

  // useEffect(() => {
  //   if (phase === FormPhases.GENERATING) {
  //     const completeTimeout = setTimeout(() => {
  //       setTimeout(() => setPhase(FormPhases.COMPLETED), 300);
  //       fadeOut(() => setTimeout(() => fadeIn(), 300));
  //     }, 8000);
  //     return () => clearTimeout(completeTimeout);
  //   }
  // }, [phase]);

  return (
    <FlexCol alignItems={'center'}>
      <FlexCol maxWidth={'124x'} width='full' alignItems='center'>
        <Box className={styles.refractWrapper}>
          <Refract page={phase === FormPhases.GENERATING ? 'loading' : 'completed'} />
        </Box>
      </FlexCol>
      <FlexCol alignItems={'center'} className={isFadingOut ? fadeOutAnim : styles.generatingAnim}>
        {phase === FormPhases.GENERATING && (
          <>
            <Title special textTransform={'uppercase'} marginTop='8x'>
              GENERATING YOUR REFRACT
            </Title>
            <Text
              color='secondary'
              level='f4'
              textTransform={'uppercase'}
              className={clsx(styles.loadingDots)}
              marginTop='4x'
            >
              {loadingText}
            </Text>
          </>
        )}
        {/* {phase === FormPhases.COMPLETED && (
          <>
            <Title
              special
              textTransform={'uppercase'}
              marginTop='8x'
              className={styles.generatingAnim}
            >
              YOU&apos;VE BEEN REFRACTED
            </Title>
            <Title level='6' textTransform={'uppercase'}>
              share your refract
            </Title>
            <BorderInput
              variant='hero'
              disabled
              width='116x'
              hideInput
              marginTop={'5x'}
              background='spectrum'
            >
              <Flex
                width='full'
                justifyContent={'space-between'}
                height={'9x'}
                alignItems='center'
                padding='0x'
              >
                <Text component={'div'}>refract.fi/rid/oskis-likes-cheese</Text>
                <Flex gap='2x' height={'full'}>
                  <BorderButton
                    textTransform={'uppercase'}
                    label='copy'
                    weight='bold'
                    width={'17x'}
                  />
                  <Button
                    variant='secondary'
                    label='view'
                    level='f5'
                    width='17x'
                    onClick={async () => {
                      await push('/rid/oskis-likes-cheese');
                      resetFormPhase();
                    }}
                  />
                </Flex>
              </Flex>
            </BorderInput>
          </>
        )} */}
      </FlexCol>
    </FlexCol>
  );
};

export default ReviewForm;
