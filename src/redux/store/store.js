import { configureStore } from "@reduxjs/toolkit";
import RegisterSlice from "../slices/RegisterSlice";
import GetallUserSlice from "../slices/GetallUserSlice";
import DeleteUserSlice from "../slices/DeleteUserSlice";
import EditUserSlice from "../slices/EditUserSlice";

export const store = configureStore({
    reducer:{
        registerApi:RegisterSlice,
        Users:GetallUserSlice,
        deleteUser:DeleteUserSlice,
        editUser:EditUserSlice,
    },
    
});