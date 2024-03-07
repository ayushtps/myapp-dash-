import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllUser = createAsyncThunk('alluser', async () => {
    try {
        let response = await axios.get('https://dashboard-api-one.vercel.app/api/v1/allUsers')
        return response.data
    }
    catch (error) {
        throw error
    }
})



const GetallUserSlice = createSlice({
    name: 'allRegister',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        errorMessage: ''
    },
    extraReducers: (builder) => {
        builder.addCase(GetAllUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(GetAllUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(GetAllUser.rejected, (state, action) => {
            state.isError = true;
            state.data = action.error.message;
            state.isLoading = true
        })
    }
})

export default GetallUserSlice.reducer