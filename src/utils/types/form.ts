export enum SupportedChains {
  ETHEREUM,
  ARBITRUM,
  AVALANCHE,
  BSC,
  BITCOIN,
  CELO,
  FANTOM,
  GNOSIS_CHAIN,
  HARMONY_ONE,
  MOONRIVER,
  OPTIMISM,
  POLYGON,
  CRONOS,
  AURORA,
  EVMOS,
}

export interface addressInfo {
  address: string;
  signature?: string;
}

export default interface IForm {
  addresses: addressInfo[]; // Need to figure out how we process CEX API keys/secrets
  name?: string | null; // Feature added later
  duration?: number | null; //duration in seconds, null => never expires
  chains: SupportedChains[] | ['all']; // lowercase characters
  groupAssetsUnder: number; // [0, 100]
  isGroupAssetsUnder: boolean;
  includeNFTs: boolean;
  isSnapshot: boolean;
}
