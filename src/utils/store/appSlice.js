import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        youtubeVideos: null,
    },
    reducers: {
        menuToggle: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        addYoutubeVideos: (state, action) => {
            state.youtubeVideos = action.payload
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        }
    }
})
export const { menuToggle, addYoutubeVideos, closeMenu } = appSlice.actions
export default appSlice.reducer