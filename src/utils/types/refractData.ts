export interface AppBalance {
  name: string;
  percentage: number;
  metaType: string;
}

export type AppBalances = AppBalance[];

export interface Token {
  color: string[];
  decimals: number;
  id: string;
  image: string;
  mainColor: string;
  name: string;
  symbole: string;
}

export interface RefractData {
  apps: AppBalances;
  percentage: number;
  token: Token;
}
