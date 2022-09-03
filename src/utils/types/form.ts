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

export interface addressInfo {
  address: string;
  signature?: string;
}

export default interface IForm {
  addresses: addressInfo[]; // Need to figure out how we process CEX API keys/secrets
  name?: string | null; // Feature added later
  duration?: number | null; //duration in seconds, null => never expires
  networks: SupportedNetworks[];
  groupAssetsUnder: number; // [0, 100]
  isGroupAssetsUnder: boolean;
  includeNFTs: boolean;
  isSnapshot: boolean;
}
