import { createSlice } from '@reduxjs/toolkit'

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    allJobs:[]
  },
  reducers: {
    addJobs: (state,action)=>{
        state.allJobs = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const {  addJobs } =  jobsSlice.actions

export default jobsSlice.reducer