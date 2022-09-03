import { Option } from 'components';
import { Box, FlexCol, FlexRow } from 'theme/components';
import * as styles from './AdvancedForm.css';
import FormTitle from './FormTitle/FormTitle';
import Hourglass from '/public/icons/hourglass.svg';
import Snapshot from '/public/icons/snapshot.svg';
import NFT from '/public/icons/nft.svg';
import Group from '/public/icons/group.svg';
import Multichain from '/public/icons/multichain.svg';
import Verified from '/public/icons/verified.svg';
import { useState } from 'react';
import { IForm, SupportedNetworks } from 'utils/types';
import { formState, useFormActions } from 'states/formState';
import { useRecoilValue } from 'recoil';
import moment, { duration } from 'moment';
import { NetworkSelectModal } from 'components/Modals';
import { useModalActions } from 'states/modalState';
import VerifyAccountsModal from 'components/Modals/VerifyAccountsModal/VerifyAccountsModal';

interface AdvancedFormProps {
  isVisible: boolean;
}

const AdvancedForm = ({ isVisible }: AdvancedFormProps) => {
  const [showExpirationOptions, setShowExpirationOptions] = useState(false);
  const [showDataOptions, setShowDataOptions] = useState(false);

  const form = useRecoilValue<IForm>(formState);

  const { setDuration, setGroupAssetsUnder, setIsGroupAssetsUnder, setIncludeNFTs, setIsSnapshot } =
    useFormActions();

  const formatMoment = (moment: string) => {
    return moment.replace('an ', '1 ').replace('a ', '1 ').toUpperCase();
  };
  return (
    <>
      <FlexCol
        className={styles.formWrapper}
        gap='5x'
        marginBottom={'24x'}
        display={isVisible ? 'flex' : 'none'}
      >
        <Box>
          <FormTitle
            title='expiration'
            icon={<Hourglass />}
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
            display={showExpirationOptions ? 'flex' : 'none'}
          >
            {/* Cleanup below 🧹🧹🧹🧹🧹*/}
            <Option
              label={formatMoment(moment.duration(1, 'h').humanize())}
              flex={1}
              isSelected={form.duration === moment.duration(1, 'h').asSeconds()}
              onClick={() => setDuration(moment.duration(1, 'h').asSeconds())}
            />
            <Option
              label={formatMoment(moment.duration(1, 'd').humanize())}
              flex={1}
              isSelected={form.duration === moment.duration(1, 'd').asSeconds()}
              onClick={() => setDuration(moment.duration(1, 'd').asSeconds())}
            />
            <Option
              label={formatMoment(moment.duration(7, 'd').humanize())}
              flex={1}
              isSelected={form.duration === moment.duration(7, 'd').asSeconds()}
              onClick={() => setDuration(moment.duration(7, 'd').asSeconds())}
            />
            <Option
              label={formatMoment(moment.duration(1, 'M').humanize())}
              flex={1}
              isSelected={form.duration === moment.duration(1, 'M').asSeconds()}
              onClick={() => setDuration(moment.duration(1, 'M').asSeconds())}
            />
            <Option
              label={formatMoment(moment.duration(1, 'y').humanize())}
              flex={1}
              isSelected={form.duration === moment.duration(1, 'y').asSeconds()}
              onClick={() => setDuration(moment.duration(1, 'y').asSeconds())}
            />
            <Option
              label='NEVER'
              flex={1}
              onClick={() => setDuration(null)}
              isSelected={!form.duration}
            />
            {/* <Option label='CUSTOM' flex={1} /> */}
          </FlexRow>
        </Box>
        <Box width='full' backgroundColor={'separator'} height={1} />
        <Box>
          <FormTitle
            title='portfolio data'
            icon={<Snapshot />}
            optionDetails='Portfolio data will be'
            activeOption={form.isSnapshot ? 'STATIC' : 'REAL TIME'}
            extend={showDataOptions}
            setExtend={setShowDataOptions}
          />
          <FlexRow
            width='full'
            gap='3x'
            paddingX={'3x'}
            marginTop='7x'
            display={showDataOptions ? 'flex' : 'none'}
          >
            <Option
              variant='detailed'
              label='STATIC'
              flex={1}
              isSelected={form.isSnapshot}
              onClick={() => setIsSnapshot(true)}
              details='Portfolio data is taken once at link creation and stored in decentralized storage. Addresses are never stored and only used once to fetch the data.'
            />
            {/* Adjust margin */}
            <Option
              variant='detailed'
              label='REAL TIME'
              flex={1}
              isSelected={!form.isSnapshot}
              onClick={() => setIsSnapshot(false)}
              details='Portfolio data is updated every 5 minutes. Addresses are stored in an encrypted centralized database.'
            />
          </FlexRow>
        </Box>
        <Box width='full' backgroundColor={'separator'} height={1} />
        <FormTitle
          title='nft allocations'
          icon={<NFT />}
          optionDetails='Allocations will'
          activeOption={`${form.includeNFTs ? 'INCLUDE' : 'EXCLUDE'} NFTS`}
          variant='switch'
          toggled={form.includeNFTs}
          setToggle={setIncludeNFTs}
        />
        <Box width='full' backgroundColor={'separator'} height={1} />

        <FormTitle
          title='group assets'
          icon={<Group />}
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
          icon={<Multichain />}
          optionDetails='Allocations will include'
          activeOption={
            form.networks.length === Object.values(SupportedNetworks).length
              ? 'ALL SUPPORTED NETWORKS'
              : `${form.networks.length} NETWORK${form.networks.length === 1 ? '' : 'S'}`
          }
          modal='NETWORK_SELECT'
        />
        <Box width='full' backgroundColor={'separator'} height={1} />
        <FormTitle
          title='VERIFICATION'
          icon={<Verified />}
          optionDetails='Your addresses are unverified.'
          modal='VERIFY_ACCOUNTS'
          activeOption='VERIFY ACCOUNTS'
        />
      </FlexCol>
      <NetworkSelectModal />
      <VerifyAccountsModal />
    </>
  );
};

export default AdvancedForm;
