import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./slices/userInfoSlice";
import { userLibraryInfoSlice } from "./slices/userLibraryInfoSlice";

const store = configureStore({
    reducer:{
        userInfo:userInfoSlice.reducer,
        userLibraryInfo:userLibraryInfoSlice.reducer
    }
})

export default store;