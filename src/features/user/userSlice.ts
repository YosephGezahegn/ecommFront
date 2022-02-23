import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface CurrentUser {
    id: string
    username: string
    email: string
    token: string
}

export interface AuthState {
    isFetching: boolean
    currentUser?: CurrentUser
    error: boolean
    errorMessage: null

}
export const initialState = {
    users: [],
    currentUser: {},
    isFetching: false,
    error: false,
    isLoggedIn: false,
    errorMessage: null
}
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.isLoggedIn = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isLoggedIn = true;
            toast.success("Logged In", {
                position: "top-center",
            });
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload;
            state.isLoggedIn = false;
            toast.error(`Error: ${action.payload} `, {
                position: "top-center",
            });

        },
        logout: (state) => {

            state.users = [];
            state.currentUser = {};
            state.isLoggedIn = false;

            toast.success("LoggOut Sucess", {
                position: "top-center",
            });
        },

        signupStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        signupSuccess: (state, action) => {
            state.isFetching = false;
            // state.currentUser = action.payload;
            loginSuccess(action.payload)
            toast.success("SignUp Sucess", {
                position: "top-center",
            });
        },
        signupFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            toast.error(`Error: ${action.payload} `, {
                position: "top-center",
            });
        },

        //DELETE
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }, deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(
                state.users.findIndex((item: any) => item._id === action.payload),
                1
            );
            toast.success("User Deleted Sucess", {
                position: "top-center",
            });
        },
        deleteUserFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload;
            toast.error(`Error: ${action.payload} `, {
                position: "top-center",
            });
        },



        //GET ALL
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;

        },
        getUserFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload;
            toast.error(`Error: ${action.payload} `, {
                position: "top-center",
            });
        },



        //UPDATE
        updateUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, signupStart, signupSuccess, signupFailure, getUserStart, getUserFailure, getUserSuccess, deleteUserFailure,
    deleteUserStart, deleteUserSuccess
} = userSlice.actions;
export default userSlice.reducer;