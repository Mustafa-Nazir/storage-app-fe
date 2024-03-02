import IUserInfo from "@/models/user/IUserInfo";
import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name:"userInfo",
    initialState:{} as IUserInfo,
    reducers:{
        addUserInfo:(state,action) => {
            const data:IUserInfo = action.payload;
            state._id = data._id;
            state.email = data.email;
            state.name = data.name;
            state.surname = data.surname;
        }
    }
})

export const {addUserInfo} = userInfoSlice.actions;