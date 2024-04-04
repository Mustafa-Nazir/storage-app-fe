import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./slices/userInfoSlice";
import { userLibraryInfoSlice } from "./slices/userLibraryInfoSlice";
import { pageNameSlice } from "./slices/pageNameSlice";

const store = configureStore({
    reducer:{
        userInfo:userInfoSlice.reducer,
        userLibraryInfo:userLibraryInfoSlice.reducer,
        pageName:pageNameSlice.reducer
    }
})

export default store;