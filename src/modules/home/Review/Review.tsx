import { Button, Chips, Title } from 'components';
import moment from 'moment';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useFormPhaseActions } from 'states/formPhasesState';
import { formState } from 'states/formState';
import { Box, FlexCol, FlexRow } from 'theme/components';
import { formatMoment } from 'utils/func';
import { getBorderColor } from 'utils/func/getBorderColor';
import { IForm, SupportedNetworks } from 'utils/types';
import { FormPhases } from 'utils/types/formPhase';
import FormOption from '../Generate/components/FormOption/FormOption';
import * as styles from './Review.css';
const Review = () => {
  const form = useRecoilValue<IForm>(formState);
  const { setPhase, setShowParams } = useFormPhaseActions();

  useEffect(() => {
    const generatingTimeout = setTimeout(() => {
      setPhase(FormPhases.GENERATING);
    }, 6800);
    return () => clearTimeout(generatingTimeout);
  }, []);

  return (
    <FlexCol alignItems={'center'}>
      <Title special textTransform={'uppercase'} className={styles.reviewFormAnim}>
        review your parameters
      </Title>
      <FlexRow gap='2x' marginTop={'9x'} className={styles.reviewFormAnim}>
        {form.accounts.map(({ address, ens, type, exchange }, index) => (
          <Chips
            key={address}
            label={type === 'exchange' && exchange ? exchange : ens ? ens : address ? address : ''}
            isLocked
            background={getBorderColor(index)}
          />
        ))}
      </FlexRow>
      <FlexCol marginTop={'0x'} width='124x'>
        <FlexCol className={styles.reviewFormAnim}>
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
        <Box
          height='0x'
          backgroundColor='separator-non-opaque'
          marginTop={'8x'}
          position='relative'
          className={styles.reviewFormAnim}
        >
          <Box
            height='full'
            background={'spectrum'}
            className={styles.progressAnim}
            position='absolute'
            zIndex={1}
          />
        </Box>
        <FlexCol marginTop={'4x'} alignItems={'center'}>
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
        </FlexCol>
      </FlexCol>
    </FlexCol>
  );
};

export default Review;
