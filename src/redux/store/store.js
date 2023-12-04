import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../components/Product/productReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
