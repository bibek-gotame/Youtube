import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
      cacheSearch:{},
      searchData:null
    },
    reducers: {
       addcacheSearch:(state,action)=>{
        state.cacheSearch = Object.assign(state.cacheSearch,action.payload)
       }
    }
})
export const {addcacheSearch} = searchSlice.actions
export default searchSlice.reducer