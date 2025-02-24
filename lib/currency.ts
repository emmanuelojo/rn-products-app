export const formatCurrency = (amount: number, currency: string = "USD", locale?: string): string => {
  const localeToUse = locale ?? "en-US";
  return new Intl.NumberFormat(localeToUse, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
