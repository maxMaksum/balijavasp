import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  user:null,
  userName:null,
  userEmail:null
}

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    loginA: (state, action) => {
      state.user=action.payload
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
    },

    logout: (state) => {
      state.user=null
      state.userName = null
      state.userEmail = null
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { loginA, logout } = userSlice.actions
export const selectUserName = (state)=>state.user.userName
export const selectUserEmail = (state)=>state.user.userEmail
export const selectUser = (state)=>state.user.user
export default userSlice.reducer