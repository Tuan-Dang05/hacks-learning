// src/redux/inputValueSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

export const inputValueSlice = createSlice({
    name: 'inputValue',
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setInputValue } = inputValueSlice.actions;

export const selectInputValue = (state) => state.inputValue.value;

export default inputValueSlice.reducer;
