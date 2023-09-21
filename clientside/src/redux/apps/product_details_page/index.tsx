import { createSlice } from "@reduxjs/toolkit";
import { getProductDetails } from "./action";
import { RootState } from '../../store'; // Import RootState from your Redux setup


interface ProductDetailState {
    productDetails: any;
    isLoading:boolean;
    error:String;
}

const initialState: ProductDetailState = {
    productDetails: undefined,
    isLoading:false,
    error:'',
};

const productDetaileSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProductDetails.pending, (state, action) => {
            state.isLoading = true;
            state.error = '';
        })
        .addCase(getProductDetails.fulfilled, (state, action) => {
            state.productDetails = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(getProductDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message as string;
        });
    }
});

export const selectProductDetails = (state: RootState) => {
    return state.productDetails; // Access the product slice from the RootState
};

export default productDetaileSlice.reducer;
