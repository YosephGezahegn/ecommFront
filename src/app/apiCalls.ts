import {
    loginFailure, loginStart, loginSuccess, getUserStart,
    getUserSuccess,
    getUserFailure, deleteUserFailure,
    deleteUserStart, deleteUserSuccess,
    signupStart, signupSuccess,
    signupFailure
} from "../features/user/userSlice";
import { publicRequest, userRequest } from "../requestMethods";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
    getProductIdStart,
    getProductIdSuccess,
    getProductIdFailure,





} from "../features/products/productSlice";

export const login = async (dispatch: any, user: any) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));

    } catch (err: any) {
        // console.log(err?.response.data.message)
        dispatch(loginFailure(err?.response?.data?.message));
    }
};
export const signup = async (dispatch: any, user: any) => {
    dispatch(signupStart());
    try {
        const res = await publicRequest.post("/auth/signup", user);
        dispatch(signupSuccess(res.data));

    } catch (err: any) {
        // console.log(err?.response.data.message)
        dispatch(signupFailure(err?.response?.data?.message));
    }
};
export const getUsers = async (dispatch: any) => {
    dispatch(getUserStart());
    try {
        const res = await userRequest.get("/users");
        dispatch(getUserSuccess(res.data));
    } catch (err: any) {
        dispatch(getUserFailure(err?.response?.data?.message));
    }
};

export const deleteUser = async (id: string, dispatch: any) => {
    dispatch(deleteUserStart());
    try {
        await userRequest.delete(`/users/delete/${id}`);
        dispatch(deleteUserSuccess(id));
    } catch (err: any) {
        dispatch(deleteUserFailure(err?.response?.data?.message));
    }
};


export const getProducts = async (dispatch: any) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err: any) {
        dispatch(getProductFailure(err?.response?.data?.message));
    }
};

export const getProductId = async (id: any, dispatch: any) => {
    dispatch(getProductIdStart());
    try {
        const res = await publicRequest.get(`products/${id}`);
        dispatch(getProductIdSuccess(res.data));
    } catch (err: any) {
        dispatch(getProductIdFailure(err?.response?.data?.message));
    }
};

export const deleteProduct = async (id: string, dispatch: any) => {
    dispatch(deleteProductStart());
    try {
        await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err: any) {
        dispatch(deleteProductFailure(err?.response?.data?.message));
    }
};

export const updateProduct = async (id: any, product: any, dispatch: any) => {
    dispatch(updateProductStart());
    try {
        await userRequest.put(`/products/${id}`, product);
        dispatch(updateProductSuccess(id));


    } catch (err: any) {
        dispatch(updateProductFailure(err?.response?.data?.message));
    }
};
export const addProduct = async (product: any, dispatch: any) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`, product);
        dispatch(getProductSuccess(res.data));
    } catch (err: any) {
        dispatch(addProductFailure(err?.response?.data?.message));
    }
};