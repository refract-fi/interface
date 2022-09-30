import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import { ReactNode } from 'react';
import {
  coinbaseWallet,
  coinbaseWalletHooks,
  metaMask,
  metamaskHooks,
  walletConnect,
  walletConnectHooks,
} from './connectors';

const connectors: [MetaMask | WalletConnect | CoinbaseWallet, Web3ReactHooks][] = [
  [metaMask, metamaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
];

interface ConnectionProviderProps {
  children: ReactNode;
}

const ConnectionProvider = ({ children }: ConnectionProviderProps) => {
  return <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>;
};

export default ConnectionProvider;
