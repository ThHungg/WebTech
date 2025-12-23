export const formatPercentage = (value: number | string): string => {
  const numValue = typeof value === "string" ? parseFloat(value) : value;
  return `${Math.floor(numValue)}%`;
}

