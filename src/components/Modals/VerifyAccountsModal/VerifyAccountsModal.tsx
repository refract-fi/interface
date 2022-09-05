import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Text from 'components/Typography/Text';
import { useModalActions } from 'states/modalState';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import Verified from '/public/icons/verified.svg';
import VerifiedChromatic from '/public/icons/verified-chromatic.svg';
import * as styles from './VerifyAccountsModal.css';

const VerifyAccountsModal = () => {
  const { isModalVisible, resetModalStatus } = useModalActions();
  return (
    <Modal
      title={'VERIFICATION'}
      isVisible={isModalVisible('VERIFY_ACCOUNTS')}
      icon='verified'
      onSave={() => resetModalStatus()}
      onCancel={() => resetModalStatus()}
    >
      <FlexCol gap='2x' marginTop={'2x'}>
        <FlexCol padding={'2x'} gap='0x'>
          <Text>1/3 Wallets verified</Text>
          <Text component={'p'} level='b2' color='secondary'>
            Remember that you need to verify all the wallets to display the verified badge on your
            Refract.{' '}
            <Text component={'button'} color='action' level='b2' cursor='pointer'>
              Learn More
            </Text>
          </Text>
        </FlexCol>
        <Box height={1} width='full' backgroundColor='separator-non-opaque' />
        <FlexCol gap='0x'>
          <FlexRow
            justifyContent={'space-between'}
            paddingX='2x'
            paddingY='1x'
            backgroundColor={'gray-5'}
          >
            <Text level='b2'>0x2453...b324</Text>
            <Flex alignItems={'center'} gap='0x'>
              <Text className={styles.textGradient} level='b2'>
                Verified
              </Text>
              <VerifiedChromatic />
            </Flex>
          </FlexRow>
          <FlexRow justifyContent={'space-between'} paddingX='2x' paddingY='1x'>
            <Text level='b2'>0x2453...b324</Text>
            <Button variant='text' size='none' label='Verify' level='b2' />
          </FlexRow>
          <FlexRow justifyContent={'space-between'} paddingX='2x' paddingY='1x'>
            <Text level='b2'>Refract.eth</Text>
            <Button variant='text' size='none' label='Verify' level='b2' />
          </FlexRow>
        </FlexCol>
      </FlexCol>
    </Modal>
  );
};

export default VerifyAccountsModal;
