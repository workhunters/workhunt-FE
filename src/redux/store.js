import { configureStore } from '@reduxjs/toolkit'
import jobsSlice from './jobs/jobs'
import userSlice from './user/user'

export default configureStore({
  reducer: {
    user: userSlice,
    jobs: jobsSlice
  }
})