import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const BagSlice = createSlice({
  name : "bagList",
  initialState : [],
  reducers : {
    bagList : (store,action)=>{
      (store.push(action.payload))
    },
    removingFromBag : (store,action)=>{
      
return store.filter((item)=> item !== action.payload)

    }
    
  }
})

export const BagActions = BagSlice.actions;

export default BagSlice