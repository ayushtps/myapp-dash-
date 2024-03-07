import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ResentUser = createAsyncThunk('update', async () => {
    try {
        let response = await axios.get('https://dashboard-api-one.vercel.app/api/v1/recentActivity')
        return response.data
    }
    catch (error) {
        throw error
    }
})



const ResentActivitySlice = createSlice({
    name: 'resent',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        errorMessage: ''
    },
    extraReducers: (builder) => {
        builder.addCase(ResentUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(ResentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(ResentUser.rejected, (state, action) => {
            state.isError = true;
            state.data = action.error.message;
            state.isLoading = true
        })
    }
})

export default ResentActivitySlice.reducer