import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: [],
    allCompanies: [],
    jobsByCompanies: {},
  },
  reducers: {
    addJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    addCompanies: (state, action) => {
      state.allCompanies = action.payload;
    },
    getJobsByCompanies: (state, action) => {
      state.jobsByCompanies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addJobs, addCompanies, getJobsByCompanies } = jobsSlice.actions;

export default jobsSlice.reducer;
