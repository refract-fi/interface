import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { initializeConnector } from '@web3-react/core';
import { URLS } from 'connection/chains';
import { GnosisSafe } from '@web3-react/gnosis-safe';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';

export const [coinbaseWallet, coinbaseWalletHooks] = initializeConnector<CoinbaseWallet>(
  actions =>
    new CoinbaseWallet({
      actions,
      options: {
        url: URLS[1][0],
        appName: 'web3-react',
      },
    })
);

export const [gnosisSafe, gnosisHooks] = initializeConnector<GnosisSafe>(
  actions => new GnosisSafe({ actions })
);

export const [metaMask, metamaskHooks] = initializeConnector<MetaMask>(
  actions => new MetaMask({ actions })
);

export const [walletConnect, walletConnectHooks] = initializeConnector<WalletConnect>(
  actions =>
    new WalletConnect({
      actions,
      options: {
        rpc: URLS,
      },
    })
);
