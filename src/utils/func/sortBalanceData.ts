import { RefractData } from 'utils/types/refractData';

export const sortedBalanceData = balances => {
  const sortedData = balances.data.sort(
    (a: RefractData, b: RefractData) => b.percentage - a.percentage
  );
  const organisedData = balances.data.slice(0, 5);

  let sumOfOtherAssets = 0;
  const otherAssets = sortedData.slice(5, -1).map((otherAsset: RefractData) => {
    sumOfOtherAssets += otherAsset.percentage;
    return {
      name: otherAsset.token.name,
      percentage: otherAsset.percentage,
      metaType: 'other',
    };
  });
  organisedData.push({
    apps: otherAssets,
    percentage: sumOfOtherAssets,
    token: {
      colors: ['#000000', '#FFFFFF'],
      decimals: 18,
      id: 'other-assets',
      name: 'Other Assets',
      symbol: 'OTHER',
    },
  });
  return organisedData;
};
