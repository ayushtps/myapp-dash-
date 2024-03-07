import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UserEdit = createAsyncThunk('update', async (registerData) => {
    const { _id, firstName, lastName, mobileNumber } = registerData;
    try {
        let response = await axios.put('https://dashboard-api-one.vercel.app/api/v1/updateUser/' + _id, { firstName, lastName, mobileNumber })
        return response.data
    }
    catch (error) {
        throw error
    }
})



const EditUserSlice = createSlice({
    name: 'update',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        errorMessage: ''
    },
    extraReducers: (builder) => {
        builder.addCase(UserEdit.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(UserEdit.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(UserEdit.rejected, (state, action) => {
            state.isError = true;
            state.data = action.error.message;
            state.isLoading = true
        })
    }
})

export default EditUserSlice.reducer