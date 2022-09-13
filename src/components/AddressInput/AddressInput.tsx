import { Input, Chips, Text, Button } from 'components';
import { ethers } from 'ethers';
import { validate } from 'bitcoin-address-validation';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { formState, useFormActions } from 'states/formState';
import { Box, Flex } from 'theme/components';
import { vars } from 'theme/vars.css';
import { IForm } from 'utils/types';
import { IAddressInfo } from 'utils/types/form';
import { useModalActions } from 'states/modalState';
import BorderInput from 'components/BorderInput/BorderInput';
import * as styles from './AddressInput.css';

const AddressInput = () => {
  const { addresses, CEXs } = useRecoilValue<IForm>(formState);
  const { setAddress } = useFormActions();
  const { setVisibleModal } = useModalActions();

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const checkInput = async (targetVal: string) => {
    //Check for duplicates
    const indexOfDuplicate = [...addresses].findIndex(
      (address: IAddressInfo) => address.address === value
    );
    if (indexOfDuplicate !== -1 && addresses[indexOfDuplicate].address.length === value.length) {
      setError('DUPLICATE_ADDRESS');
      return;
    }
    //Check if valid ethereum address
    if (ethers.utils.isAddress(targetVal)) {
      setError('');
      setValue('');
      setAddress([...addresses, { address: targetVal, type: 'ethereum' }]);
      return;
    }
    if (validate(targetVal)) {
      setError('');
      setValue('');
      setAddress([...addresses, { address: targetVal, type: 'bitcoin' }]);
      return;
    }
    //or check if valid ENS
    if (`${targetVal.slice(-4)}` === '.eth') {
      try {
        const provider = new ethers.providers.InfuraProvider(
          'homestead',
          process.env.INFURA_API_KEY
        );
        const targetAddress = await provider.resolveName(targetVal);
        if (targetAddress) {
          setError('');
          setValue('');
          setAddress([...addresses, { address: targetAddress, ens: targetVal, type: 'ethereum' }]);
          return;
        }
      } catch (e) {
        setError('ERROR_ENS_FETCH');
        console.log('error retrieving ens address');
        return;
      }
    }
    //or check if valid btc address
    setError('INVALID_ADDRESS');
    return;
  };

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (e.target.value[e.target.value.length - 1] === ' ' ||
        e.target.value[e.target.value.length - 1] === ',') &&
      e.target.value.length > 3
    ) {
      const targetVal = e.target.value.replaceAll(',', '').replaceAll(' ', '');
      checkInput(targetVal);
    }
    setValue(e.target.value);
  };

  const onClear = (index: number) => {
    const list = [...addresses];
    list.splice(index, 1);
    setAddress(list);
  };

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      const targetVal = e.target.value.replaceAll(',', '').replaceAll(' ', '');
      checkInput(targetVal);
      e.preventDefault();
    } else if (e.key === 'Backspace' && value.length === 0) {
      onClear(addresses.length - 1);
    }
  };

  const onBlur = () => {
    if (value.length > 3) {
      setValue('');
      setAddress([...addresses, { address: value.replaceAll(',', '').replaceAll(' ', '') }]);
    }
  };

  const getBorderColor = (index: number) => {
    type backgroundType = keyof typeof vars.background;
    const backgrounds: backgroundType[] = ['red', 'blue', 'green'];
    return backgrounds[index % backgrounds.length];
  };

  return (
    <Box position={'relative'}>
      <Box className={styles.addressInputWrapper}>
        <BorderInput
          variant='hero'
          marginTop={'10x'}
          size='large'
          value={value}
          placeholder='Enter addresses (0x, btc, .eth)'
          width='full'
          background={error ? 'error' : 'spectrum'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          onBlur={() => onBlur()}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeydown(e)}
        >
          {addresses.length >= 1 &&
            addresses.map(({ address, ens, type, exchange }, index) => (
              <Chips
                label={type === 'exchange' && exchange ? exchange : ens ? ens : address}
                key={address}
                background={getBorderColor(index)}
                onClear={() => onClear(index)}
              />
            ))}
        </BorderInput>
      </Box>
      <Flex marginTop={'1x'} width='full' justifyContent={'space-between'} alignItems='center'>
        <Text color='negative' level='f4' textTransform={'uppercase'}>
          {error}
        </Text>
        <Button
          label='Add Centralized Exchange'
          size='none'
          color='action'
          variant='text'
          onClick={() => setVisibleModal('ADD_CEX')}
        />
      </Flex>
    </Box>
  );
};

export default AddressInput;
