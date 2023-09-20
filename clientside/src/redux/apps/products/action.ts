'use client';

import {createAsyncThunk} from "@reduxjs/toolkit";
import {http, thunkHandler} from "../../../utils/apiSerivces";

export const getAllProducts = createAsyncThunk(
    'getAllProducts',
    async (thunkAPI) => {
        const result = await thunkHandler(
            http.get(`https://fakestoreapi.com/products`),
            thunkAPI,
        );
          console.log('result are --->',result);
        return result;
    },
)
