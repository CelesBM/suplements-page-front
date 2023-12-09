import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../redux/Product/productSlice";
import shopReducer from "../../redux/shop/shopSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    shop: shopReducer,
  },
});

export default store;
