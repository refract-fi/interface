import { Button, Chips, Text, Title } from 'components';
import moment from 'moment';
import { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { formPhaseState, useFormPhaseActions } from 'states/formPhasesState';
import { formState } from 'states/formState';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import { formatMoment } from 'utils/func';
import { getBorderColor } from 'utils/func/getBorderColor';
import { IForm, SupportedNetworks } from 'utils/types';
import { FormPhases } from 'utils/types/formPhase';
import FormOption from './components/FormOption/FormOption';
import * as styles from './Generate.css';

const ReviewForm = () => {
  const form = useRecoilValue<IForm>(formState);
  const { phase } = useRecoilValue(formPhaseState);
  const { setPhase, setShowParams } = useFormPhaseActions();

  const { isReview, isGenerating } = useMemo(() => {
    return {
      isReview: phase === FormPhases.REVIEW,
      isGenerating: phase === FormPhases.GENERATING,
    };
  }, [phase]);

  useEffect(() => {
    const generatingTimeout = setTimeout(() => {
      setPhase(FormPhases.GENERATING);
    }, 6800);
    return () => clearTimeout(generatingTimeout);
  }, []);

  useEffect(() => {
    if (isGenerating) {
      const completeTimeout = setTimeout(() => {
        setPhase(FormPhases.COMPLETED);
      }, 6000);
      return () => clearTimeout(completeTimeout);
    }
  }, [isGenerating]);

  return (
    <FlexCol alignItems={'center'}>
      {isReview && (
        <Title special textTransform={'uppercase'} className={styles.reviewFormAnim}>
          review your parameters
        </Title>
      )}
      {isGenerating && (
        <Title special textTransform={'uppercase'} className={styles.generatingAnim}>
          generating your refract
        </Title>
      )}
      <FlexRow gap='2x' marginTop={'9x'}>
        {form.addresses.map(({ address, ens, type, exchange }, index) => (
          <Chips
            key={address}
            label={type === 'exchange' && exchange ? exchange : ens ? ens : address}
            isLocked
            background={getBorderColor(index)}
          />
        ))}
      </FlexRow>
      <FlexCol maxWidth={'124x'} width='full' marginTop={'0x'}>
        {isGenerating && (
          <Flex className={styles.generatingAnim}>
            <video width='500' height='438' autoPlay muted loop>
              <source src='/animation.mp4' type='video/mp4' />
            </video>
          </Flex>
        )}
        {isReview && (
          <FlexCol className={styles.reviewFormAnim} width='full'>
            <FormOption
              title={'expiration'}
              icon='hourglass'
              activeOption={
                !form.duration
                  ? 'NEVER EXPIRE'
                  : 'EXPIRE IN ' + formatMoment(moment.duration(form.duration * 1000).humanize())
              }
              animDelay={'0.3s'}
            />
            <FormOption
              title={'portfolio data'}
              icon='snapshot'
              activeOption={form.isSnapshot ? 'STATIC' : 'REAL TIME'}
              animDelay={'0.9s'}
            />
            <FormOption
              title={'nft allocations'}
              icon='nft'
              activeOption={`${form.includeNFTs ? 'INCLUDE' : 'EXCLUDE'} NFTS`}
              animDelay={'1.5s'}
            />
            <FormOption
              title={'group assets'}
              icon='group'
              activeOption={
                form.isGroupAssetsUnder
                  ? `Assets under ${form.groupAssetsUnder}% ARE GROUPED`
                  : 'NOT GROUPED'
              }
              animDelay={'2.1s'}
            />
            <FormOption
              title={'multichain'}
              icon='multichain'
              activeOption={
                form.networks.length === Object.values(SupportedNetworks).length
                  ? 'ALL SUPPORTED NETWORKS'
                  : `${form.networks.length} NETWORK${form.networks.length === 1 ? '' : 'S'}`
              }
              animDelay={'2.7s'}
            />
            <FormOption
              title={'verification'}
              icon='verified'
              activeOption={'NOT VERIFIED'}
              animDelay={'3.3s'}
            />
          </FlexCol>
        )}
        <Box
          height='0x'
          backgroundColor='separator-non-opaque'
          marginTop={'8x'}
          position='relative'
        >
          {isGenerating && (
            <Box
              className={styles.generatingAnim}
              height='full'
              position={'absolute'}
              zIndex={2}
              width='full'
            >
              <Box height='full' background={'spectrum'} className={styles.gradientAnim} />
            </Box>
          )}
          <Box
            height='full'
            background={'spectrum'}
            className={styles.progressAnim}
            position='absolute'
            zIndex={1}
          />
        </Box>
        <FlexCol marginTop={'4x'} alignItems={'center'}>
          {isReview && (
            <FlexCol width='full' alignItems={'center'} gap='2x' className={styles.reviewFormAnim}>
              <Button
                level='f4'
                label='modify refract'
                width='fit-content'
                textTransform='uppercase'
                color='action'
                weight='bold'
                onClick={() => {
                  setPhase(FormPhases.CREATE);
                  setShowParams(true);
                }}
              />
              <Button
                level='f4'
                label='skip'
                width='fit-content'
                textTransform='uppercase'
                color='tertiary'
                onClick={() => {
                  setPhase(FormPhases.GENERATING);
                }}
              />
            </FlexCol>
          )}
          {isGenerating && (
            <Text
              color='secondary'
              level='f4'
              textTransform={'uppercase'}
              className={styles.generatingAnim}
            >
              Anonymizing your accounts
            </Text>
          )}
        </FlexCol>
      </FlexCol>
    </FlexCol>
  );
};

export default ReviewForm;
