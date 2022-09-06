import { Button, Chips, Text, Title } from 'components';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { useFormPhaseActions } from 'states/formPhasesState';
import { formState } from 'states/formState';
import { Box, FlexCol, FlexRow } from 'theme/components';
import { formatMoment } from 'utils/func';
import { IForm, SupportedNetworks } from 'utils/types';
import { FormPhases } from 'utils/types/formPhase';
import FormOption from './components/FormOption/FormOption';

const GeneratingRefract = () => {
  const form = useRecoilValue<IForm>(formState);
  const { setPhase, setShowParams } = useFormPhaseActions();
  return (
    <FlexCol alignItems={'center'} marginTop='48x'>
      <Title marginBottom={'11x'}>GENERATING YOUR REFRACT</Title>
      <FlexRow gap='2x'>
        <Chips label='0x2345...1231' isLocked background='blue' />
        <Chips label='0x2345...1231' isLocked background='red' />
        <Chips label='Jabun.eth' isLocked background='green' />
        <Chips label='0skis.eth' isLocked background='darkBlue' />
      </FlexRow>
      <Text level='f4' color='secondary' textTransform={'uppercase'} marginTop='7x'>
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
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <FormOption
          title={'portfolio data'}
          icon='snapshot'
          activeOption={form.isSnapshot ? 'STATIC' : 'REAL TIME'}
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <FormOption
          title={'nft allocations'}
          icon='nft'
          activeOption={`${form.includeNFTs ? 'INCLUDE' : 'EXCLUDE'} NFTS`}
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <FormOption
          title={'group assets'}
          icon='group'
          activeOption={
            form.isGroupAssetsUnder
              ? `Assets under ${form.groupAssetsUnder}% ARE GROUPED`
              : 'NOT GROUPED'
          }
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <FormOption
          title={'multichain'}
          icon='multichain'
          activeOption={
            form.networks.length === Object.values(SupportedNetworks).length
              ? 'ALL SUPPORTED NETWORKS'
              : `${form.networks.length} NETWORK${form.networks.length === 1 ? '' : 'S'}`
          }
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <FormOption title={'verification'} icon='verified' activeOption={'NOT VERIFIED'} />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
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

export default GeneratingRefract;
