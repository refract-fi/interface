import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Text from 'components/Typography/Text';
import { useModalActions } from 'states/modalState';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import * as styles from './VerifyAccountsModal.css';
import Icon from 'components/Icon/Icon';
import { useRecoilValue } from 'recoil';
import { formState } from 'states/formState';
import { formatAccount, titleCase } from 'utils/func';

const VerifyAccountsModal = () => {
  const { isModalVisible, resetModalStatus } = useModalActions();
  const { accounts } = useRecoilValue(formState);

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
          <Text>/{accounts.length} Wallets verified</Text>
          <Text component={'p'} level='b2' color='secondary'>
            Remember that you need to verify all the wallets to display the verified badge on your
            Refract.{' '}
            <Button size='none' color='action'>
              Learn More
            </Button>
          </Text>
        </FlexCol>
        <Box height={1} width='full' backgroundColor='separator-non-opaque' />
        <FlexCol gap='0x'>
          {accounts.map(account => {
            const formattedAccount = account.address && formatAccount(account.address);
            const isVerified = account.secretApiKey || account.signature;
            return (
              <FlexRow
                justifyContent={'space-between'}
                paddingX='2x'
                paddingY='1x'
                backgroundColor={isVerified ? 'gray-5' : 'none'}
                key={account.address ? account.address : account.apiKey}
              >
                <Text level='b2'>
                  {account.ens
                    ? account.ens
                    : account.exchange
                    ? titleCase(account.exchange)
                    : formattedAccount}
                </Text>
                <Flex alignItems={'center'} gap='0x'>
                  {isVerified ? (
                    <>
                      <Text className={styles.textGradient} level='b2'>
                        Verified
                      </Text>
                      <Icon name='verified-chromatic' />
                    </>
                  ) : (
                    <Button size='none' label='Verify' level='b2' color='action' />
                  )}
                </Flex>
              </FlexRow>
            );
          })}
        </FlexCol>
      </FlexCol>
    </Modal>
  );
};

export default VerifyAccountsModal;
