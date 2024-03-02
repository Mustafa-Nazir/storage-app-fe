import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./slices/userInfoSlice";

const store = configureStore({
    reducer:{
        userInfo:userInfoSlice.reducer
    }
})

export default store;