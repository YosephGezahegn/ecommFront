import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export type ProductDocument = {
    productName?: string
    price?: number
    description?: string
    image?: string
    brand?: string
    category?: string[]
    rating?: number
    discount?: boolean
    discountPrice?: number
    availability?: boolean
    views?: number
    inStock?: number
    timestamps?: boolean
    _id?: string
}
export type initialState = {
    singleProduct: Object
    products: ProductDocument[]
    isFetching: boolean
    error: boolean
}

export type ProductState = {
    name: string
    initialState: initialState
}

export type product = {
    id: string
    product: ProductDocument
}


export const productSlice = createSlice({
    name: "product",
    initialState: {
        singleProduct: {},
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductStart: (state: initialState) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state: initialState, action: PayloadAction<ProductDocument[]>) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state: initialState, action: any) => {
            state.isFetching = false;
            state.error = true;
        },
        getProductIdStart: (state: initialState) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductIdSuccess: (state: initialState, action: PayloadAction<ProductDocument>) => {
            state.isFetching = false;
            state.singleProduct = action.payload;

        },
        getProductIdFailure: (state: initialState, action: any): any => {
            state.isFetching = false;
            state.error = true;
            toast.error(`Error: ${action.payload} `, {
                position: "top-center",
            });
        },
        //DELETE
        deleteProductStart: (state: initialState) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item: any) => item._id === action.payload),
                1
            );
            toast.success("Product deleted sucessfully", {
                position: "top-center",
            });
        },
        deleteProductFailure: (state: initialState, action: any) => {
            state.isFetching = false;
            state.error = true;
            toast.error(`Error: ${action.payload} `, {
                position: "top-center",
            });
        },
        //UPDATE
        updateProductStart: (state: initialState) => {
            state.isFetching = true;
            state.error = false;
        },
        updateProductSuccess: (state: initialState, action: PayloadAction<product>) => {
            state.isFetching = false;
            state.products[
                state.products.findIndex((item): any => item._id === action.payload.id)
            ] = action.payload.product;
            toast.success("Update Sucess", {
                position: "top-center",
            });
        },
        updateProductFailure: (state: initialState, action: any) => {
            state.isFetching = false;
            state.error = true;
            toast.error(`Error: ${action.payload} `, {
                position: "top-center",
            });
        },
        //ADD PRODUCT
        addProductStart: (state: initialState) => {
            state.isFetching = true;
            state.error = false;
        },
        addProductSuccess: (state: initialState, action: PayloadAction<ProductDocument>) => {
            state.isFetching = false;
            state.products.push(action.payload);
            toast.success("Product Added Sucess", {
                position: "top-center",
            });
        },
        addProductFailure: (state: initialState, action: any) => {
            state.isFetching = false;
            state.error = true;
            toast.error(`Error: ${action.payload} `, {
                position: "top-center",
            });
        },
    },
});

export const {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    getProductIdStart,
    getProductIdSuccess,
    getProductIdFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;