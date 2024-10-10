import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'

const store = configureStore({
  reducer: {
    // Add reducers here
    auth: authSlice,
  },
})

export default store
