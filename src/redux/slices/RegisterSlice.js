import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UserRegister = createAsyncThunk('users', async (registerData) => {
    try {
        console.log();
        let response = await axios.post('https://dashboard-api-one.vercel.app/api/v1/register', registerData)
        return response.data
    }
    catch (error) {
        throw error
    }
})



const RegisterSlice = createSlice({
    name: 'register',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        errorMessage: ''
    },
    extraReducers: (builder) => {
        builder.addCase(UserRegister.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(UserRegister.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(UserRegister.rejected, (state, action) => {
            state.isError = true;
            state.data = action.error.message;
            state.isLoading = true
        })
    }
})

export default RegisterSlice.reducer