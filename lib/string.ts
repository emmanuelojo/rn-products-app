export const truncateString = (str: string, n: number) => {
  if (!str) return str;
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};
