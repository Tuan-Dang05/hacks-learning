import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    studentData: [], // Changed to an array to store data
};

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudentData: (state, action) => {
            state.studentData = action.payload;
        },
    },
});

export const { setStudentData } = studentSlice.actions;

export const selectStudentData = (state) => state.student.studentData;

export default studentSlice.reducer;
