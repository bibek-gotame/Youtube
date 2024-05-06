import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
      cacheSearch:{},
      searchQuery:null
    },
    reducers: {
       addcacheSearch:(state,action)=>{
        state.cacheSearch = Object.assign(state.cacheSearch,action.payload)
       },
       addSearchQuery:(state,action)=>{
        state.searchQuery = action.payload
       }
    }
})
export const {addcacheSearch,addSearchQuery} = searchSlice.actions
export default searchSlice.reducer