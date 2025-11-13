export function formatMillionVND(amount: number): string {
  if (isNaN(amount)) return '';
  const million = amount / 1_000_000;
  // Làm tròn đến 2 chữ số thập phân nếu cần
  const formatted = million % 1 === 0 ? million.toFixed(0) : million.toFixed(2);
  return `${formatted}M VNĐ`;
}