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

export interface IAccountInfo {
  address?: string;
  ens?: string;
  type?: 'ethereum' | 'bitcoin' | 'exchange';
  // Verification done once in frontend and another signature verification in the backend
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

export default interface IForm {
  accounts: IAccountInfo[]; // Need to figure out how we process CEX API keys/secrets
  name?: string | null; // Feature added later
  duration?: number | null; //duration in seconds, null => never expires
  networks: SupportedNetworks[];
  groupAssetsUnder: number; // [0, 100]
  isGroupAssetsUnder: boolean;
  includeNFTs: boolean;
  isSnapshot: boolean;
  CEXs: ICEXInfo[];
}

// const expirationEntity: IFormOption = {
//   title: 'expiration',
//   icon: 'hourglass',
//   key: 'duration',
//   optionDetails: 'Your refract link will',
// };

// const portfolioEntity: IFormOption = {
//   title: 'portfolio data',
//   icon: 'snapshot',
//   key: 'isSnapshot',
//   optionDetails: 'Portfolio data will be static',
// };

// const nftAllocationsEntity: IFormOption = {
//   title: 'nft allocations'
// }

// export const formOptions: IFormOption[] = [expirationEntity];
