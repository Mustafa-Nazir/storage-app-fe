import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import { createSlice } from "@reduxjs/toolkit";

export const userLibraryInfoSlice = createSlice({
    name:"userInfo",
    initialState:{} as IUserLibraryDto,
    reducers:{
        addUserLibraryInfo:(state,action) => {
            const data:IUserLibraryDto = action.payload;
            state.departments = data.departments;
            state.role = data.role;
        }
    }
})

export const {addUserLibraryInfo} = userLibraryInfoSlice.actions;