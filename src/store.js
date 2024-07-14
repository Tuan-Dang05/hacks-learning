// file: store.js

import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../src/redux/studentSlice';
import inputValueReducer from '../src/redux/inputValueSlice';

export default configureStore({
    reducer: {
        student: studentReducer,
        inputValue: inputValueReducer
    },
});
