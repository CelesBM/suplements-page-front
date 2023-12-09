import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  activeCategory: "All",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Agregar los productos:
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },

    // Filtrar productos por categoria:
    filterProductsByCategory(state, action) {
      const category = action.payload;
      state.activeCategory = category;
      if (category === "All") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === category
        );
      }
    },
  },
});

export const { setProducts, filterProductsByCategory } = productSlice.actions;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const selectActiveCategory = (state) => state.products.activeCategory;

export default productSlice.reducer;
