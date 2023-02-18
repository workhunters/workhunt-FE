import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user:{}
  },
  reducers: {
    initializeState:(state,action)=>{
        state.user = action.payload?.user;
        state.isLoggedIn = action.payload?.isLoggedIn
        
    },
    updateUser: (state,action)=>{
        state.user = action.payload;
    },
    login: (state, action)=>{
        state.user = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem("user",JSON.stringify(action.payload))
        localStorage.setItem("isLoggedIn","true")
    },
    logout: (state, action)=>{
        state.user = {};
        state.isLoggedIn = false;
        localStorage.removeItem('user')
        localStorage.removeItem('isLoggedIn')
    },
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateUser, login, initializeState,logout } = counterSlice.actions

export default counterSlice.reducer