'use client';

import {createAsyncThunk} from "@reduxjs/toolkit";
import {http, thunkHandler} from "../../../utils/apiSerivces";

export const getProductDetails = createAsyncThunk(
    'getProductDetails',
    async (value:any,thunkAPI) => {
        const result = await thunkHandler(
            http.get(`https://fakestoreapi.com/products/${value}`),
            thunkAPI,
        );
          console.log('result are --->',result);
        return result;
    },
)
