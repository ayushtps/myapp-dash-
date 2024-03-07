import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UserDelete = createAsyncThunk('delete', async (id) => {
    try {
        let response = await axios.delete('https://dashboard-api-one.vercel.app/api/v1/deleteUser/' + id)
        return response.data
    }
    catch (error) {
        throw error
    }
})



const DeleteUserSlice = createSlice({
    name: 'delete',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        errorMessage: ''
    },
    extraReducers: (builder) => {
        builder.addCase(UserDelete.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(UserDelete.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(UserDelete.rejected, (state, action) => {
            state.isError = true;
            state.data = action.error.message;
            state.isLoading = true
        })
    }
})

export default DeleteUserSlice.reducer