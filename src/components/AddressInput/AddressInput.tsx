import { Input, Chips, Text, Button } from 'components';
import { ethers } from 'ethers';
import { validate } from 'bitcoin-address-validation';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { formState, useFormActions } from 'states/formState';
import { Box, Flex } from 'theme/components';
import { vars } from 'theme/vars.css';
import { IForm } from 'utils/types';
import { AccountInfo, WalletAccount } from 'utils/types/form';
import { useModalActions } from 'states/modalState';
import BorderInput from 'components/BorderInput/BorderInput';
import * as styles from './AddressInput.css';
import { formatAccount, titleCase } from 'utils/func';

const AddressInput = () => {
  const { accounts } = useRecoilValue<IForm>(formState);
  const { setAccounts } = useFormActions();
  const { setVisibleModal } = useModalActions();

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const checkInput = async (targetVal: string) => {
    //Check for duplicates
    const indexOfDuplicate = [...accounts].findIndex(
      (account: WalletAccount) =>
        account.address === value.replaceAll(',', '').replaceAll(' ', '') ||
        account.ens === value.replaceAll(',', '').replaceAll(' ', '')
    );

    if (
      indexOfDuplicate !== -1
      // Is below necessary?
      // && accounts[indexOfDuplicate].address?.length === value.length
    ) {
      setError('DUPLICATE_ADDRESS');
      return false;
    }
    //Check if valid ethereum address
    if (ethers.utils.isAddress(targetVal)) {
      setError('');
      setValue('');
      setAccounts([...accounts, { address: targetVal, type: 'evm' }]);
      return true;
    }
    if (validate(targetVal)) {
      setError('');
      setValue('');
      setAccounts([...accounts, { address: targetVal, type: 'bitcoin' }]);
      return true;
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
          setAccounts([...accounts, { address: targetAddress, ens: targetVal, type: 'evm' }]);
          return true;
        }
      } catch (e) {
        setError('ERROR_ENS_FETCH');
        console.log('error retrieving ens address');
        return false;
      }
    }
    //or check if valid btc address
    setError('INVALID_ADDRESS');
    return false;
  };

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (e.target.value[e.target.value.length - 1] === ' ' ||
        e.target.value[e.target.value.length - 1] === ',') &&
      e.target.value.length > 3
    ) {
      const targetVal = e.target.value.replaceAll(',', '').replaceAll(' ', '');
      const isValid = await checkInput(targetVal);
      if (isValid) {
        setValue('');
      } else {
        setValue(e.target.value);
      }
    } else {
      setValue(e.target.value);
    }
  };

  const onClear = (index: number) => {
    const list = [...accounts];
    list.splice(index, 1);
    setAccounts(list);
  };

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      const targetVal = e.target.value.replaceAll(',', '').replaceAll(' ', '');
      checkInput(targetVal);
      e.preventDefault();
    } else if (e.key === 'Backspace' && value.length === 0) {
      onClear(accounts.length - 1);
    }
  };

  const onBlur = () => {
    if (value.length > 3) {
      setValue('');
      setAccounts([...accounts, { address: value.replaceAll(',', '').replaceAll(' ', '') }]);
    }
  };

  const getBorderColor = (index: number) => {
    type backgroundType = keyof typeof vars.background;
    const backgrounds: backgroundType[] = ['red', 'blue', 'green'];
    return backgrounds[index % backgrounds.length];
  };

  return (
    <Box
      position={'relative'}
      width={{ sm: 'full', lg: 'auto' }}
      paddingX={{ sm: '2x', md: '6x', lg: 'none' }}
    >
      <Box className={styles.addressInputWrapper}>
        <BorderInput
          variant='hero'
          marginTop={{ sm: '8x', md: '10x' }}
          size='large'
          value={value}
          placeholder='Enter accounts (0x, btc, .eth)'
          width='full'
          background={error ? 'error' : 'spectrum'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          onBlur={() => onBlur()}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeydown(e)}
        >
          {accounts.length >= 1 &&
            accounts.map(({ address, ens, type, exchange }, index) => (
              <Chips
                label={
                  type === 'exchange' && exchange
                    ? titleCase(exchange)
                    : ens
                    ? ens
                    : address
                    ? formatAccount(address)
                    : ''
                }
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
        {/* <Button
          label='Add Centralized Exchange'
          size='none'
          color='action'
          onClick={() => setVisibleModal('ADD_CEX')}
        /> */}
      </Flex>
    </Box>
  );
};

export default AddressInput;
