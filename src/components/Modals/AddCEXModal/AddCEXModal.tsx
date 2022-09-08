import Modal from 'components/Modal/Modal';
import { useModalActions } from 'states/modalState';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import { Button, Icon, Text } from 'components';
import { useState } from 'react';
import { SupportedExchanges } from 'utils/types/exchanges';

const AddCEXModal = () => {
  const { isModalVisible, resetModalStatus } = useModalActions();
  const [activeExchange, setActiveExchange] = useState<SupportedExchanges>();
  return (
    <Modal
      title={'CENTRALIZED EXCHANGES'}
      isVisible={isModalVisible('ADD_CEX')}
      onCancel={() => resetModalStatus()}
    >
      <Box height={1} backgroundColor='separator-non-opaque' marginY={'2x'} />
      <FlexCol gap='2x'>
        {Object.values(SupportedExchanges).map((exchange: SupportedExchanges) => (
          <Button
            backgroundColor={'action'}
            width='full'
            key={exchange}
            onClick={() => setActiveExchange(exchange)}
          >
            <FlexRow alignItems={'center'} gap='2x' paddingY='1x'>
              <Icon name={exchange} />
              <Text level='b2'>{exchange.charAt(0).toUpperCase() + exchange.slice(1)}</Text>
            </FlexRow>
          </Button>
        ))}
      </FlexCol>
      <Flex justifyContent={'center'} marginY='2x'>
        <Text level='b2' color='secondary'>
          Don&apos;t see your Centralized Exchange?
          <Box component={'span'} color='action' cursor='pointer'>
            {' '}
            Request
          </Box>
        </Text>
      </Flex>
      <Box height={1} backgroundColor='separator-non-opaque' />
    </Modal>
  );
};

export default AddCEXModal;
