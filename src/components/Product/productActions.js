export const SET_PRODUCTS = "SET_PRODUCTS";
export const FILTER_PRODUCTS_BY_CATEGORY = "FILTER_PRODUCTS_BY_CATEGORY";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const filterProductsByCategory = (category) => {
  return {
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: category,
  };
};
