import { useWeb3React } from '@web3-react/core';
import Button from 'components/Button/Button';
import Text from 'components/Typography/Text';
import { useRecoilValue } from 'recoil';
import { formState, useFormActions } from 'states/formState';
import { FlexCol, FlexRow } from 'theme/components';

interface SelectWalletProps {
  verifAccount: string;
  setVerifPhase: (verifPhase: 'default' | 'select_wallet' | 'sign') => void;
}

const SelectWallet = ({ verifAccount, setVerifPhase }: SelectWalletProps) => {
  const { connector, account, isActive, provider } = useWeb3React();
  const { accounts } = useRecoilValue(formState);
  const { setAccounts } = useFormActions();

  const onClick = () => {
    connector.activate();
    setVerifPhase('sign');
  };
  const disconnect = () => {
    if (connector?.deactivate) {
      void connector.deactivate();
    } else {
      void connector.resetState();
    }
  };

  const sign = async () => {
    try {
      if (provider) {
        const signer = provider.getSigner();
        const signature = await signer.signMessage('this is a test');
        const address = await signer.getAddress();

        let newAccountsArr = accounts.map(account => {
          if (account.address === verifAccount && address === account.address) {
            return { ...account, signature: signature };
          }
          return { ...account };
        });

        setAccounts(newAccountsArr);
        setVerifPhase('default');
        disconnect();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FlexRow>
      {/* SELECT WALLET */}
      {!isActive && (
        <>
          <Button color='orange' label='metamask' onClick={() => onClick()} />
        </>
      )}
      {isActive && (
        <FlexCol>
          {/* SWITCH TO ACCOUNT (if needed)*/}
          <Text>account : {account}</Text>
          <Text>verifAccount : {verifAccount}</Text>
          {account !== verifAccount && <Text color='negative'>PLEASE SWITCH ACCOUNT</Text>}
          {account === verifAccount && (
            <Button variant='hero' label='VERIFY' onClick={() => sign()} />
          )}
          <Button variant='secondary' label='disconnect' onClick={() => disconnect()} />
        </FlexCol>
      )}
    </FlexRow>
  );
};

export default SelectWallet;
