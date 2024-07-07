import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchingSlice from "./fetching"
import BagSlice from "./BagList";

const itemsStore = configureStore({
  reducer : {
    items : itemsSlice.reducer,
    fetchItems : fetchingSlice.reducer,
    bagList : BagSlice.reducer
  }
})

export default itemsStore;