export const formatValueDiscount = (value: number | string): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (num >= 1000) {
    const k = num / 1000;
    return k % 1 === 0 ? `${Math.floor(k)}k` : `${k.toFixed(1)}k`;
  }
  return num.toString();
};