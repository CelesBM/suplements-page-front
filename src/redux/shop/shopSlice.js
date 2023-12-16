import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopItems: [], // Inicializa el carrito como un array vacío
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToShop: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.shopItems.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.shopItems.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.shopItems.find((item) => item.id === id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else if (existingProduct && existingProduct.quantity === 1) {
        state.shopItems = state.shopItems.filter((item) => item.id !== id);
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      state.shopItems = state.shopItems.filter((item) => item.id !== id);
    },
    clearShop: (state) => {
      state.shopItems = [];
    },
    finishPurchase: (state) => {
      state.shopItems = [];
      //Cuando se complete la compra, también deberías limpiar el localStorage para vaciar el carrito y restablecerlo para futuras compras.
      //localStorage.removeItem("products");
    },
    // Me falta finalizar la compra
  },
});

export const {
  addToShop,
  decrementQuantity,
  removeProduct,
  clearShop,
  finishPurchase,
} = shopSlice.actions;

export default shopSlice.reducer;
