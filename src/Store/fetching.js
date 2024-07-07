import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name : "fetchItems",
  initialState : {
    fetching : false,
    currentlyFetchig : false
  },
reducers : {
  fetched : (state)=>{
    return state.fetching = true
  },
  markFetchStarted : (state)=>{
    return state.currentlyFetchig = true
  },
markFetchFinish : (state)=>{
  return state.currentlyFetchig = false
}
}
})

export const fetchActions = fetchingSlice.actions;

export default fetchingSlice;