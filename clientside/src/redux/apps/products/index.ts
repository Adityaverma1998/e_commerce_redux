import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./action";
import { RootState } from '../../store'; // Import RootState from your Redux setup


interface ProductState {
    products: any;
    isLoading:boolean;
    error:String;
}

const initialState: ProductState = {
    products: undefined,
    isLoading:false,
    error:'',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllProducts.pending, (state, action) => {
            state.isLoading = true;
            state.error = '';
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
            state.error = '';
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message as string;
        });
    }
});

export const selectProduct = (state: RootState) => {
    return state.products; // Access the product slice from the RootState
};

export default productSlice.reducer;
