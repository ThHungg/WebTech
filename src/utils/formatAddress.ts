export const formatAddress = (address: any) => {
  return `${address.street_address}, ${address.ward}, ${address.district}, ${address.city}`;
};
