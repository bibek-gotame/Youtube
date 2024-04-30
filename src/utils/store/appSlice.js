import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        menuToggle: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})
export const { menuToggle } = appSlice.actions
export default appSlice.reducer