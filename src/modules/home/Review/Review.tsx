import { Button, Chips, Text, Title } from 'components';
import moment from 'moment';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useFormPhaseActions } from 'states/formPhasesState';
import { formState } from 'states/formState';
import { Box, FlexCol, FlexRow } from 'theme/components';
import { formatMoment } from 'utils/func';
import { IForm, SupportedNetworks } from 'utils/types';
import { FormPhases } from 'utils/types/formPhase';
import FormOption from './components/FormOption/FormOption';
import * as styles from './Review.css';

const ReviewForm = () => {
  const form = useRecoilValue<IForm>(formState);
  const { setPhase, setShowParams } = useFormPhaseActions();

  useEffect(() => {
    const generatingTimeout = setTimeout(() => {
      setPhase(FormPhases.GENERATING);
    }, 9000);
    return () => clearTimeout(generatingTimeout);
  }, []);

  return (
    <FlexCol alignItems={'center'} className={styles.reviewFormAnim}>
      <Title level='4' marginTop={'5x'}>
        REVIEW YOUR PARAMETERS
      </Title>
      <FlexRow gap='2x' marginTop={'9x'}>
        <Chips label='0x2345...1231' isLocked background='blue' />
        <Chips label='0x2345...1231' isLocked background='red' />
        <Chips label='Jabun.eth' isLocked background='green' />
        <Chips label='0skis.eth' isLocked background='darkBlue' />
      </FlexRow>
      <Text level='f4' color='secondary' textTransform={'uppercase'} marginTop='5x'>
        Anonymizing Accounts...
      </Text>
      <FlexCol maxWidth={'124x'} width='full' marginTop={'0x'}>
        <FormOption
          title={'expiration'}
          icon='hourglass'
          activeOption={
            !form.duration
              ? 'NEVER EXPIRE'
              : 'EXPIRE IN ' + formatMoment(moment.duration(form.duration * 1000).humanize())
          }
          animDelay={'1s'}
        />
        <FormOption
          title={'portfolio data'}
          icon='snapshot'
          activeOption={form.isSnapshot ? 'STATIC' : 'REAL TIME'}
          animDelay={'2s'}
        />
        <FormOption
          title={'nft allocations'}
          icon='nft'
          activeOption={`${form.includeNFTs ? 'INCLUDE' : 'EXCLUDE'} NFTS`}
          animDelay={'3s'}
        />
        <FormOption
          title={'group assets'}
          icon='group'
          activeOption={
            form.isGroupAssetsUnder
              ? `Assets under ${form.groupAssetsUnder}% ARE GROUPED`
              : 'NOT GROUPED'
          }
          animDelay={'4s'}
        />
        <FormOption
          title={'multichain'}
          icon='multichain'
          activeOption={
            form.networks.length === Object.values(SupportedNetworks).length
              ? 'ALL SUPPORTED NETWORKS'
              : `${form.networks.length} NETWORK${form.networks.length === 1 ? '' : 'S'}`
          }
          animDelay={'5s'}
        />
        <FormOption
          title={'verification'}
          icon='verified'
          activeOption={'NOT VERIFIED'}
          animDelay={'6s'}
        />
        <Box height='0x' backgroundColor='separator-non-opaque' marginTop={'8x'}>
          <Box height='full' background={'spectrum'} className={styles.progressAnim} />
        </Box>
        <Button
          level='f4'
          label='MODIFY REFRACT'
          variant='text'
          size='large'
          marginTop={'4x'}
          onClick={() => {
            setPhase(FormPhases.CREATE);
            setShowParams(true);
          }}
        />
      </FlexCol>
    </FlexCol>
  );
};

export default ReviewForm;
