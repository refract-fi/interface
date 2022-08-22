export enum SupportedChains {
  ETHEREUM = 'ethereum',
  ARBITRUM = 'arbitrum',
  AVALANCHE = 'avalanche',
  BSC = 'bsc',
  BITCOIN = 'bitcoin',
  CELO = 'celo',
  FANTOM = 'fantom',
  GNOSIS_CHAIN = 'gnosis chain',
  HARMONY_ONE = 'harmony one',
  MOONRIVER = 'moonriver',
  OPTIMISM = 'optimism',
  POLYGON = 'polygon',
  CRONOS = 'cronos',
  AURORA = 'aurora',
  EVMOS = 'evmos',
}

interface addressInfo {
  address: string;
  signature?: string;
}

export default interface IForm {
  address: addressInfo[]; // Need to figure out how we process CEX API keys/secrets
  name?: string | null; // Feature added later
  duration?: number | null; //duration in seconds, null => never expires
  chains: SupportedChains[] | ['all']; // lowercase characters
  groupAssetsUnder: number; // [0, 100]
  isGroupAssetsUnder: boolean;
  includeNFTs: boolean;
  isSnapshot: boolean;
}
