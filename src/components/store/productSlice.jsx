
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        brands: [],
        colors: [],
        loading: false,
        error: null,
        brandLoading: false,
        colorLoading: false,
        brandError: null,
        colorError: null,
    },
    reducers: {
        saveProducts: (state, action) => {
            state.products = action.payload;
        },
        saveBrands: (state, action) => {
            state.brands = action.payload;
        },
        saveColors: (state, action) => {
            state.colors = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setBrandLoading: (state, action) => {
            state.brandLoading = action.payload;
        },
        setColorLoading: (state, action) => {
            state.colorLoading = action.payload;
        },
        setBrandError: (state, action) => {
            state.brandError = action.payload;
        },
        setColorError: (state, action) => {
            state.colorError = action.payload;
        },
    },
});

export const { 
    saveProducts, saveBrands, saveColors,
    setLoading, setError,
    setBrandLoading, setBrandError,
    setColorLoading, setColorError
} = productsSlice.actions;

export default productsSlice.reducer;
