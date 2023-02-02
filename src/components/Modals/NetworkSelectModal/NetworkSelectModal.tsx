import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';
import Modal from 'components/Modal/Modal';
import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { formState, initialNetworksState, useFormActions } from 'states/formState';
import { useModalActions } from 'states/modalState';
import { Box, FlexCol, FlexRow } from 'theme/components';
import { SupportedNetworks } from 'utils/types';
import { CreationJob } from 'utils/types/form';

const NetworkSelectModal = () => {
  const { networks } = useRecoilValue<CreationJob>(formState);
  const { isModalVisible, resetModalStatus } = useModalActions();
  const [selectedNetworks, setSelectedNetworks] = useState<SupportedNetworks[]>(networks);

  const { setNetworks } = useFormActions();

  const isChecked = (network: SupportedNetworks) =>
    selectedNetworks.findIndex(
      (selectedNetwork: SupportedNetworks) => selectedNetwork === network
    ) !== -1;

  const setChecked = useCallback(
    (network: SupportedNetworks) => {
      const checkedIndex = selectedNetworks.findIndex(
        (selectedNetwork: SupportedNetworks) => selectedNetwork === network
      );
      if (checkedIndex === -1) {
        setSelectedNetworks([...selectedNetworks, network]);
      } else {
        const list = [...selectedNetworks];
        list.splice(checkedIndex, 1);
        setSelectedNetworks(list);
      }
    },
    [selectedNetworks]
  );

  return (
    <Modal
      title={'NETWORK SELECT'}
      icon='multichain'
      isVisible={isModalVisible('NETWORK_SELECT')}
      onSave={() => {
        if (selectedNetworks.length >= 1) {
          setNetworks(selectedNetworks);
          resetModalStatus();
        }
      }}
      onCancel={() => {
        setSelectedNetworks(networks);
        resetModalStatus();
      }}
      saveDisabled={selectedNetworks.length === 0}
      isMobileFullscreen
    >
      <FlexCol gap='0x' height={'full'}>
        <FlexRow justifyContent={'space-between'} marginTop='2x'>
          <Checkbox
            label={`${selectedNetworks.length} network${
              selectedNetworks.length > 1 ? 's' : ''
            } selected`}
            checked={selectedNetworks.length >= 1}
            checkmarkType='line'
            setChecked={() =>
              selectedNetworks.length <= 1
                ? setSelectedNetworks(initialNetworksState)
                : setSelectedNetworks([])
            }
          />
          <Button label='Clear' color='action' onClick={() => setSelectedNetworks([])} />
        </FlexRow>
        <Box
          borderColor={'separator-non-opaque'}
          borderWidth='1px'
          borderStyle='solid'
          marginBottom={'1x'}
        />
        <FlexCol gap='0x' overflow={'scroll'}>
          {Object.values(SupportedNetworks).map((network: SupportedNetworks) => (
            <Checkbox
              label={network}
              variant='button'
              key={network}
              checked={isChecked(network)}
              setChecked={() => setChecked(network)}
            />
          ))}
        </FlexCol>
      </FlexCol>
    </Modal>
  );
};

export default NetworkSelectModal;
