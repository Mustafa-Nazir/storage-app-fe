import ILibraryInfoDto from "@/models/library/ILibraryInfoDto";
import { createSlice } from "@reduxjs/toolkit";

export const libraryInfoSlice = createSlice({
    name:"libraryInfo",
    initialState:{} as ILibraryInfoDto,
    reducers:{
        addLibraryInfo:(state,action) => {
            const data:ILibraryInfoDto = action.payload;
            state._id = data._id;
            state.name = data.name;
            state.ownerId = data.ownerId;
            state.sizeGb = data.sizeGb;
        }
    }
})

export const {addLibraryInfo} = libraryInfoSlice.actions;