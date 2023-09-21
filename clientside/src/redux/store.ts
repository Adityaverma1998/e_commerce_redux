import { configureStore } from "@reduxjs/toolkit";
import products from "./apps/products";
import productDetails from "./apps/product_details_page";


export const store = configureStore({
  reducer: {
    products,
    productDetails
  },
//   devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
