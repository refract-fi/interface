import { Button, Chips, Text, Title } from 'components';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { formState } from 'states/formState';
import { Box, FlexCol, FlexRow } from 'theme/components';
import { formatMoment } from 'utils/func';
import { IForm, SupportedNetworks } from 'utils/types';
import RefractOption from './FormOption';

const GeneratingRefract = () => {
  const form = useRecoilValue<IForm>(formState);
  return (
    <FlexCol alignItems={'center'} marginTop='72x'>
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
        <RefractOption
          title={'expiration'}
          icon='hourglass'
          activeOption={
            !form.duration
              ? 'NEVER EXPIRE'
              : 'EXPIRE IN ' + formatMoment(moment.duration(form.duration * 1000).humanize())
          }
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <RefractOption
          title={'portfolio data'}
          icon='snapshot'
          activeOption={form.isSnapshot ? 'STATIC' : 'REAL TIME'}
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <RefractOption
          title={'nft allocations'}
          icon='nft'
          activeOption={`${form.includeNFTs ? 'INCLUDE' : 'EXCLUDE'} NFTS`}
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <RefractOption
          title={'group assets'}
          icon='group'
          activeOption={
            form.isGroupAssetsUnder
              ? `Assets under ${form.groupAssetsUnder}% ARE GROUPED`
              : 'NOT GROUPED'
          }
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <RefractOption
          title={'multichain'}
          icon='multichain'
          activeOption={
            form.networks.length === Object.values(SupportedNetworks).length
              ? 'ALL SUPPORTED NETWORKS'
              : `${form.networks.length} NETWORK${form.networks.length === 1 ? '' : 'S'}`
          }
        />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <RefractOption title={'verification'} icon='verified' activeOption={'NOT VERIFIED'} />
        <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
        <Box height={'0x'} width={'full'} backgroundColor='separator-non-opaque' marginTop={'8x'} />
        <Button level='f4' label='MODIFY REFRACT' variant='text' size='large' marginTop={'4x'} />
      </FlexCol>
    </FlexCol>
  );
};

export default GeneratingRefract;
