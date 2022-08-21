import { Option } from 'components';
import { Box, FlexCol, FlexRow } from 'theme/components';
import * as styles from './AdvancedForm.css';
import FormTitle from './FormTitle';
import Hourglass from '/public/icons/hourglass.svg';
import Snapshot from '/public/icons/snapshot.svg';
import NFT from '/public/icons/nft.svg';
import Group from '/public/icons/group.svg';
import Multichain from '/public/icons/multichain.svg';
import Verified from '/public/icons/verified.svg';

const AdvancedForm = () => {
  return (
    <FlexCol className={styles.formWrapper} gap='5x'>
      <Box>
        <FormTitle
          title='expiration'
          icon={<Hourglass />}
          optionDetails='Your refract link will'
          activeOption='NEVER EXPIRE'
        />
        <FlexRow width='full' gap='3x' paddingX={'3x'} marginTop='7x'>
          <Option label='1 HOUR' flex={1} />
          <Option label='1 DAY' flex={1} />
          <Option label='7 DAYS' flex={1} />
          <Option label='1 MONTH' flex={1} />
          <Option label='1 YEAR' flex={1} />
          <Option label='NEVER' isSelected flex={1} />
          <Option label='CUSTOM' flex={1} />
        </FlexRow>
      </Box>
      <Box width='full' backgroundColor={'separator'} height={1} />
      <Box>
        <FormTitle
          title='portfolio data'
          icon={<Snapshot />}
          optionDetails='Portfolio data will be'
          activeOption='STATIC'
        />
        <FlexRow width='full' gap='3x' paddingX={'3x'} marginTop='7x'>
          <Option
            variant='detailed'
            label='STATIC'
            flex={1}
            isSelected
            details='Portfolio data is taken once at link creation and stored in decentralized storage. Addresses are never stored and only used once to fetch the data.'
          />
          <Option
            variant='detailed'
            label='REAL TIME'
            flex={1}
            details='Portfolio data is real-time and updated every 5 minutes. Addresses are stored in an encrypted centralized database.'
          />
        </FlexRow>
      </Box>
      <Box width='full' backgroundColor={'separator'} height={1} />
      <FormTitle
        title='nft allocations'
        icon={<NFT />}
        optionDetails='Allocations will'
        activeOption='INCLUDE NFTS'
        variant='switch'
      />
      <Box width='full' backgroundColor={'separator'} height={1} />

      <FormTitle
        title='group assets'
        icon={<Group />}
        optionDetails='Assets under 0.1% will'
        activeOption='NOT BE GROUPED'
        variant='group'
      />
      <Box width='full' backgroundColor={'separator'} height={1} />
      <FormTitle
        title='MULTICHAIN'
        icon={<Multichain />}
        optionDetails='Allocations will include'
        activeOption='ALL SUPPORTED CHAINS'
      />
      <Box width='full' backgroundColor={'separator'} height={1} />
      <FormTitle
        title='VERIFICATION'
        icon={<Verified />}
        optionDetails='Your addresses are unverified.'
        variant='verify'
      />
    </FlexCol>
  );
};

export default AdvancedForm;
