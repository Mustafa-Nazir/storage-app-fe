import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./slices/userInfoSlice";
import { userLibraryInfoSlice } from "./slices/userLibraryInfoSlice";
import { pageNameSlice } from "./slices/pageNameSlice";
import { libraryInfoSlice } from "./slices/libraryInfoSlice";
import { libraryTotalSizeSlice } from "./slices/libraryTotalSizeSlice";

const store = configureStore({
    reducer:{
        userInfo:userInfoSlice.reducer,
        userLibraryInfo:userLibraryInfoSlice.reducer,
        pageName:pageNameSlice.reducer,
        libraryInfo:libraryInfoSlice.reducer,
        libraryTotalSize:libraryTotalSizeSlice.reducer
    }
})

export default store;