import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobData: [],
    jobRecord: {}
};

const adSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData(state, action) {
            state.jobData = action.payload;
        },
        setJobRecord(state, action) {
            state.jobRecord = action.payload;
        },
    },
});

export const { setData, setJobRecord } = adSlice.actions;

export default adSlice.reducer;