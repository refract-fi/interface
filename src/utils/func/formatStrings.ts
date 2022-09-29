export const formatAccount = (account: string): string => {
  return account.slice(0, 6) + '...' + account.slice(account.length - 4, account.length);
};

export const titleCase = (string: string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};
