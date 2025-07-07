export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-US").format(num);
};
