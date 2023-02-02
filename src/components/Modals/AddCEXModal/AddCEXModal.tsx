import Modal from 'components/Modal/Modal';
import { useModalActions } from 'states/modalState';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import { Button, Icon, Text, Title, Input } from 'components';
import { useState } from 'react';
import { SupportedExchanges } from 'utils/types/exchanges';
import { formState, useFormActions } from 'states/formState';
import { useRecoilValue } from 'recoil';

const initialAddressInfo = {
  type: undefined,
  address: '',
  signature: '',
  exchange: undefined,
};

const AddCEXModal = () => {
  const { isModalVisible, resetModalStatus } = useModalActions();
  const { accounts } = useRecoilValue(formState);
  const { setAccounts } = useFormActions();
  const [error, setError] = useState('');
  // Removed feature, will fix if we re-add this feature
  // @ts-ignore
  const [CEXInfo, setCEXInfo] = useState<IAccountInfo>(initialAddressInfo);

  const onAdd = () => {
    setError('');
    if (CEXInfo.apiKey && CEXInfo.secretApiKey && CEXInfo?.exchange) {
      setAccounts([...accounts, { ...CEXInfo, type: 'exchange' }]);
      setCEXInfo(initialAddressInfo);
      resetModalStatus();
    } else {
      setError('ERROR');
    }
  };

  return (
    <Modal
      title={CEXInfo?.exchange ? 'ADD EXCHANGE' : 'CENTRALIZED EXCHANGES'}
      isVisible={isModalVisible('ADD_CEX')}
      onCancel={CEXInfo?.exchange ? () => null : () => resetModalStatus()}
      onReturn={CEXInfo?.exchange ? () => setCEXInfo(initialAddressInfo) : null}
      maxWidth='116x'
      isMobileFullscreen
      onSave={CEXInfo?.exchange ? onAdd : undefined}
      saveLabel={`add ${CEXInfo?.exchange}`}
      hideButtonsMD
    >
      <Box height={1} backgroundColor='separator-non-opaque' marginY={'2x'} />
      {!CEXInfo?.exchange ? (
        <FlexCol justifyContent={{ sm: 'space-between', md: 'flex-start' }} height='full'>
          <FlexCol gap='2x'>
            {Object.values(SupportedExchanges).map((exchange: SupportedExchanges) => {
              // @ts-ignore
              const isDisabled = !(accounts.findIndex(CEX => CEX.exchange === exchange) === -1);
              return (
                <Button
                  backgroundColor={'action'}
                  variant='exchange'
                  width='full'
                  key={exchange}
                  disabled={isDisabled}
                  onClick={() =>
                    isDisabled ? null : setCEXInfo({ ...CEXInfo, exchange: exchange })
                  }
                >
                  <FlexRow justifyContent={'space-between'} alignItems='center'>
                    <FlexRow alignItems={'center'} gap='2x' paddingY='1x'>
                      <Icon name={exchange} />
                      <Text level='b2'>{exchange.charAt(0).toUpperCase() + exchange.slice(1)}</Text>
                    </FlexRow>
                    {isDisabled && <Icon name='check' color='white' />}
                  </FlexRow>
                </Button>
              );
            })}
          </FlexCol>
          <FlexCol>
            <Flex justifyContent={'center'} marginY='2x'>
              <Text level='b2' color='secondary'>
                Don&apos;t see your Centralized Exchange?
                <Button component={'span'} color='action' cursor='pointer' size='none'>
                  {' '}
                  Request
                </Button>
              </Text>
            </Flex>
            <Box height={1} backgroundColor='separator-non-opaque' />
          </FlexCol>
        </FlexCol>
      ) : (
        <FlexCol>
          <FlexRow alignItems={'center'} gap='2x' paddingY='1x'>
            {CEXInfo?.exchange && <Icon name={CEXInfo?.exchange} />}
            <Title level='6' textTransform={'uppercase'}>
              {CEXInfo?.exchange.charAt(0).toUpperCase() + CEXInfo?.exchange.slice(1)}
            </Title>
          </FlexRow>
          <Text level='b2' color='secondary'>
            Please provide only reading access.
            <Button
              marginLeft={'0x'}
              inline
              size='none'
              label='Learn how to add Centralized Exchanges'
            />
          </Text>
          <FlexCol gap='2x' marginTop={'2x'}>
            <Input
              variant='primary'
              placeholder='Public Key'
              size='medium'
              level='b2'
              height='9x'
              value={CEXInfo?.apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCEXInfo({ ...CEXInfo, apiKey: e.target.value })
              }
            />
            <Input
              variant='primary'
              placeholder='Private Key'
              size='medium'
              level='b2'
              height='9x'
              type='password'
              value={CEXInfo?.secretApiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCEXInfo({ ...CEXInfo, secretApiKey: e.target.value })
              }
            />
          </FlexCol>
          <Button
            label={`add ${CEXInfo?.exchange}`}
            variant='secondary'
            size='large'
            marginTop={'3x'}
            display={{ sm: 'none', md: 'block' }}
            onClick={() => onAdd()}
          />
        </FlexCol>
      )}
    </Modal>
  );
};

export default AddCEXModal;
