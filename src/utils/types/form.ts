import { iconNames } from 'components/Icon/Icon';
import { SupportedExchanges } from './exchanges';

export enum SupportedNetworks {
  ETHEREUM = 'ethereum',
  ARBITRUM = 'arbitrum',
  AVALANCHE = 'avalanche',
  BNB = 'bnb',
  BITCOIN = 'bitcoin',
  FANTOM = 'fantom',
  GNOSIS_CHAIN = 'gnosischain',
  // CELO = 'celo',
  // HARMONY_ONE = 'harmony',
  // MOONRIVER = 'Moonriver',
  OPTIMISM = 'optimism',
  POLYGON = 'polygon',
  CRONOS = 'cronos',
  AURORA = 'aurora',
  EVMOS = 'evmos',
}

// export default interface IForm {
//   accounts: IAccountInfo[];
//   // name?: string | null; // feature not in refract v1
//   // duration?: number | null; //duration in seconds, null => never expires
//   networks: SupportedNetworks[];
//   groupAssetsUnder: number; // percentage: [0.00, 100.00]
//   // below if we group assets under the percentage (group assets under)
//   // isGroupAssetsUnder: boolean;
//   // includeNFTs: boolean; // if does the refract consider the nft balances
//   // isSnapshot: boolean; // i
//   // CEXs: ICEXInfo[];
// }

export interface CreationJob {
  accounts: AccountInfo[];
  name?: string | null; // feature not in refract v1
  duration?: number | null; //duration in seconds, null => never expires
  networks: SupportedNetworks[];
  groupAssetsUnder: number; // percentage: [0.00, 100.00]
}

export interface WalletAccount {
  address: string;
  ens?: string;
  type: 'evm' | 'bitcoin';
  challengerId?: string;
}

export interface CexAccount {
  exchange: SupportedExchanges;
  type: 'exchange';
  apiKey: string;
  secretApiKey: string;
}

export type AccountInfo = WalletAccount | CexAccount;
// export interface IAccountInfo {
//   address?: string;
//   ens?: string;
//   type?: 'evm' | 'bitcoin' | 'exchange';
//   // signature verification done once in frontend
//   // and another signature verification in the backend
//   // (to prevent fraudulent verif)
//   signature?: string;
//   //below only if (type === 'exchange')
//   exchange?: SupportedExchanges;
//   apiKey?: string;
//   secretApiKey?: string;
// }
export interface ICEXInfo {
  publicKey: string;
  privateKey: string;
  exchange: SupportedExchanges | null;
}
export interface IFormOption {
  title: string;
  icon: iconNames;
  key?: string;
  activeOption?: string;
  optionDetails?: string;
}
