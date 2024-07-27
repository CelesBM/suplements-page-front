import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../redux/Product/productSlice";
import shopReducer from "../../redux/shop/shopSlice";
import userReducer from "../../redux/user/UserSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    shop: shopReducer,
    user: userReducer,
  },
});

export default store;
