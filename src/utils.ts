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

export const getImageUrl = (price: number, image: string) => {
  const convertedPrice = priceRange(price);
  return `/item/${convertedPrice}/${image}.png`;
};

export const checkIdPassword = (id: string, password: string) => {
  // use regex
  const idRegex = /^[a-zA-Z0-9]{4,12}$/;
  const passwordRegex = /^[a-zA-Z0-9]{6,20}$/;

  return idRegex.test(id) && passwordRegex.test(password);
};
