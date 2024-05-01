import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatMessage: []
    },
    reducers: {
        addChat: (state, action) => {
            if (state.chatMessage.length >= 30) {
                state.chatMessage.splice(0, 1);
            }
            state.chatMessage.push(action.payload)
        }
    }
})

export const { addChat } = chatSlice.actions
export default chatSlice.reducer