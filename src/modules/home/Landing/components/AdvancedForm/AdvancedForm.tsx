import { Button, Option, Slider, Text, Title } from 'components';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import * as styles from './AdvancedForm.css';
import FormTitle from '../FormTitle/FormTitle';
import { useMemo, useState } from 'react';
import { IForm, SupportedNetworks } from 'utils/types';
import { formState, useFormActions } from 'states/formState';
import { useRecoilValue } from 'recoil';
import moment from 'moment';
import { AddCEXModal, NetworkSelectModal } from 'components/Modals';
import VerifyAccountsModal from 'components/Modals/VerifyAccountsModal/VerifyAccountsModal';
import { formatMoment } from 'utils/func';
import { modalState, useModalActions } from 'states/modalState';
import { refractDurations } from 'utils/constants/durations';

interface AdvancedFormProps {
  isVisible: boolean;
}

const AdvancedForm = ({ isVisible }: AdvancedFormProps) => {
  const [showExpirationOptions, setShowExpirationOptions] = useState(false);
  const [showDataOptions, setShowDataOptions] = useState(false);
  const { visibleModal } = useRecoilValue(modalState);

  const isModalActive = useMemo(() => visibleModal === 'NONE', [visibleModal]);

  const form = useRecoilValue<IForm>(formState);

  const currentDurationIndex = useMemo(() => {
    return refractDurations.findIndex(value => value.duration === form.duration);
  }, [form.duration]);

  const {
    setDuration,
    setGroupAssetsUnder,
    setIsGroupAssetsUnder,
    setIncludeNFTs,
    setIsSnapshot,
    resetForm,
  } = useFormActions();
  return (
    <>
      <FlexCol
        className={styles.formWrapper}
        gap='5x'
        marginBottom={{ sm: '24x', md: 'none', lg: '24x' }}
        display={{
          sm: isVisible ? 'flex' : 'none',
          md: isVisible ? 'flex' : 'none',
        }}
        paddingX={{ sm: '2x', md: '6x', lg: 'none' }}
      >
        <FlexCol marginTop={'4x'}>
          <FlexRow justifyContent={'space-between'} width='full'>
            <Title level='6' textTransform={'uppercase'} weight='regular'>
              advanced parameters
            </Title>
            <FlexRow gap={{ sm: '1x', md: '3x' }}>
              <Button label='Help' color='secondary' size='none' />
              <Button label='Reset' color='action' size='none' onClick={resetForm} />
            </FlexRow>
          </FlexRow>
          <Box height={1} background='spectrum' marginTop={'1x'} />
        </FlexCol>
        {/* <Box>
          <FormTitle
            title='expiration'
            icon='hourglass'
            optionDetails='Your refract link will'
            activeOption={
              !form.duration
                ? 'NEVER EXPIRE'
                : 'EXPIRE IN ' + formatMoment(moment.duration(form.duration * 1000).humanize())
            }
            extend={showExpirationOptions}
            setExtend={setShowExpirationOptions}
          />
          <FlexRow
            width='full'
            gap='3x'
            paddingX={'3x'}
            marginTop='7x'
            display={{ sm: 'none', md: showExpirationOptions ? 'flex' : 'none' }}
          >
            {refractDurations.map(refractDuration => (
              <Option
                key={refractDuration.label}
                label={refractDuration.label}
                flex={1}
                isSelected={
                  refractDuration.label === 'NEVER'
                    ? !form.duration
                    : form.duration === refractDuration.duration
                }
                onClick={() => setDuration(refractDuration.duration)}
              />
            ))}
            <Option label='CUSTOM' flex={1} />
          </FlexRow>
          <Flex display={{ sm: 'flex', md: 'none' }} width='full' marginTop={'1x'}>
            <Slider
              value={currentDurationIndex}
              onChange={(value, index) => setDuration(refractDurations[value].duration)}
            />
          </Flex>
        </Box> */}
        {/* <Box width='full' backgroundColor={'separator'} height={1} /> */}
        {/* <Box>
          <FormTitle
            title='portfolio data'
            icon='snapshot'
            optionDetails='Portfolio data will be'
            activeOption={form.isSnapshot ? 'STATIC' : 'REAL TIME'}
            extend={showDataOptions}
            setExtend={setShowDataOptions}
          />
          <Flex
            width='full'
            gap='3x'
            paddingX={{ md: '3x' }}
            marginTop={{ sm: '2x', md: '7x' }}
            flexDirection={{ sm: 'column', md: 'row' }}
            display={{ sm: 'flex', md: showDataOptions ? 'flex' : 'none' }}
          >
            <Option
              variant='detailed'
              label='STATIC'
              flex={1}
              isSelected={form.isSnapshot}
              onClick={() => setIsSnapshot(true)}
              details='Portfolio data is taken once at link creation and stored in decentralized storage. Addresses are never stored and only used once to fetch the data.'
            />
            <Option
              variant='detailed'
              label='REAL TIME'
              flex={1}
              isSelected={!form.isSnapshot}
              onClick={() => setIsSnapshot(false)}
              details='Portfolio data is updated every 5 minutes. Addresses are stored in an encrypted centralized database.'
            />
          </Flex>
        </Box>
        <Box width='full' backgroundColor={'separator'} height={1} /> */}
        <FormTitle
          title='nft allocations'
          icon='nft'
          optionDetails='Allocations will'
          activeOption={`${form.includeNFTs ? 'INCLUDE' : 'EXCLUDE'} NFT COLLECTIONS`}
          variant='switch'
          toggled={form.includeNFTs}
          setToggle={setIncludeNFTs}
        />
        {/* <Box width='full' backgroundColor={'separator'} height={1} />

        <FormTitle
          title='group assets'
          icon='group'
          optionDetails='Assets under'
          activeOption={`${form.isGroupAssetsUnder ? '' : 'NOT '}BE GROUPED`}
          variant='group'
          toggled={form.isGroupAssetsUnder}
          setToggle={setIsGroupAssetsUnder}
          percent={form.groupAssetsUnder}
          setPercent={setGroupAssetsUnder}
        />
        <Box width='full' backgroundColor={'separator'} height={1} />
        <FormTitle
          title='MULTICHAIN'
          icon='multichain'
          optionDetails='Allocations will include'
          activeOption={
            form.networks.length === Object.values(SupportedNetworks).length
              ? 'ALL SUPPORTED NETWORKS'
              : `${form.networks.length} NETWORK${form.networks.length === 1 ? '' : 'S'}`
          }
          modal='NETWORK_SELECT'
        /> */}
        <Box width='full' backgroundColor={'separator'} height={1} />
        <FormTitle
          title='VERIFICATION'
          icon='verified'
          optionDetails='Your addresses are not verified.'
          modal='VERIFY_ACCOUNTS'
          activeOption='VERIFY ACCOUNTS'
          disabled={form.accounts.length < 1}
        />
      </FlexCol>
      <NetworkSelectModal />
      <VerifyAccountsModal />
      <AddCEXModal />
    </>
  );
};

export default AdvancedForm;
