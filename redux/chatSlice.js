import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  
  chatName:null,
  chatId:null
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,

  reducers: {
    setChat: (state, action) => {
      state.chatId=action.payload.chatId
      state.chatName = action.payload.chatName
      state.chatUser = action.payload.chatUser
     
    },

   
    
  },
})

// Action creators are generated for each case reducer function
export const {setChat } = chatSlice.actions
export const selectChatName = (state)=>state.chat.chatName
export const selectChatId = (state)=>state.chat.chatId
export const selectChatUser = (state) =>state.chat.chatUser
export default chatSlice.reducer