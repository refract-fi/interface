import { Input, Chips, Text } from 'components';
import { ethers, providers } from 'ethers';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { formState, useFormActions } from 'states/formState';
import { Box, Flex } from 'theme/components';
import { vars } from 'theme/vars.css';
import { IForm } from 'utils/types';
import { addressInfo } from 'utils/types/form';

const AddressInput = () => {
  const { addresses } = useRecoilValue<IForm>(formState);
  const { setAddress } = useFormActions();

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const provider = new ethers.providers.InfuraProvider('homestead', process.env.INFURA_API_KEY);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (e.target.value[e.target.value.length - 1] === ' ' ||
        e.target.value[e.target.value.length - 1] === ',') &&
      e.target.value.length > 3
    ) {
      const targetVal = e.target.value.replaceAll(',', '').replaceAll(' ', '');
      //Check for duplicates
      const indexOfDuplicate = [...addresses].findIndex(
        (address: addressInfo) => address.address === value
      );
      if (indexOfDuplicate !== -1 && addresses[indexOfDuplicate].address.length === value.length) {
        setError('DUPLICATE_ADDRESS');
        return;
      }
      //Check if valid ethereum address or ENS
      if (!ethers.utils.isAddress(targetVal)) {
        if (`${targetVal.slice(-4)}` === '.eth') {
          try {
            const targetAddress = await provider.resolveName(targetVal);
            if (targetAddress) {
              setError('');
              setValue('');
              setAddress([...addresses, { address: targetAddress, ens: targetVal }]);
              return;
            }
          } catch (e) {
            setError('ERROR_ENS_FETCH');
            console.log('error retrieving ens address');
            return;
          }
        }
        //Here we can add checks for the binance keys

        setError('INVALID_ADDRESS');
        return;
      }
      setError('');
      setValue('');
      setAddress([...addresses, { address: targetVal }]);
      return;
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
      setValue('');
      setAddress([
        ...addresses,
        { address: e.target.value.replaceAll(',', '').replaceAll(' ', '') },
      ]);
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
      <Input
        variant='hero'
        marginTop={'10x'}
        value={value}
        placeholder='0x... or ENS name'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        onBlur={() => onBlur()}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeydown(e)}
      >
        {addresses.length >= 1 &&
          addresses.map(({ address, signature, ens }, index) => (
            <Chips
              label={ens ? ens : address}
              key={address}
              background={getBorderColor(index)}
              onClear={() => onClear(index)}
            />
          ))}
      </Input>
      <Flex position='absolute' marginTop={'0x'} width='full' justifyContent={'center'}>
        <Text color='negative' level='f4'>
          {error}
        </Text>
      </Flex>
    </Box>
  );
};

export default AddressInput;
