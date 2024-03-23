export const priceRange = (price: number) => {
  if (price <= 500) {
    return "500";
  } else if (price <= 1000) {
    return "1000";
  } else if (price <= 2000) {
    return "2000";
  } else {
    return "error";
  }
};