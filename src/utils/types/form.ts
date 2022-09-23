import { iconNames } from 'components/Icon/Icon';
import { SupportedExchanges } from './exchanges';

export enum SupportedNetworks {
  ETHEREUM = 'Ethereum',
  ARBITRUM = 'Arbitrum',
  AVALANCHE = 'Avalanche',
  BSC = 'Binance Smart Chain',
  BITCOIN = 'Bitcoin',
  CELO = 'Celo',
  FANTOM = 'Fantom',
  GNOSIS_CHAIN = 'Gnosis Chain',
  HARMONY_ONE = 'Harmony One',
  MOONRIVER = 'Moonriver',
  OPTIMISM = 'Optimism',
  POLYGON = 'Polygon',
  CRONOS = 'Cronos',
  AURORA = 'Aurora',
  EVMOS = 'Evmos',
}

export default interface IForm {
  accounts: IAccountInfo[];
  name?: string | null; // feature not in refract v1
  duration?: number | null; //duration in seconds, null => never expires
  networks: SupportedNetworks[];
  groupAssetsUnder: number; // percentage: [0.00, 100.00]
  // below if we group assets under the percentage (group assets under)
  isGroupAssetsUnder: boolean;
  includeNFTs: boolean; // if does the refract consider the nft balances
  isSnapshot: boolean; // i
  CEXs: ICEXInfo[];
}

export interface IAccountInfo {
  address?: string;
  ens?: string;
  type?: 'ethereum' | 'bitcoin' | 'exchange';
  // signature verification done once in frontend
  // and another signature verification in the backend
  // (to prevent fraudulent verif)
  signature?: string;
  //below only if (type === 'exchange')
  exchange?: SupportedExchanges;
  apiKey?: string;
  secretApiKey?: string;
}
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
