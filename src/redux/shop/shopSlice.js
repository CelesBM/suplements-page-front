import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopItems: [], // Inicializa el carrito como un array vacío
  purchaseData: null, //Almacena la información de la compra
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
        state.shopItems = state.filter((item) => item.id !== id);
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      state.shopItems = state.shopItems.filter((item) => item.id !== id);
    },
    clearShop: (state) => {
      state.shopItems = [];
    },
    finishPurchase: (state, action) => {
      state.purchaseData = action.payload; //Guarda info de la compra
      state.shopItems = []; //Vacía el carrito
    },
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
