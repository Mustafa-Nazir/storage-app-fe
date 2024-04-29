import { createSlice } from "@reduxjs/toolkit";

export const libraryTotalSizeSlice = createSlice({
    name:"libraryTotalSize",
    initialState:{size:0} as {size:number},
    reducers:{
        setLibraryTotalSize:(state,action) => {
            const size:number = action.payload;
            state.size = size;
        },
        increaseLibraryTotalSize:(state,action) => {
            state.size += action.payload;
        }
    }
})

export const {setLibraryTotalSize , increaseLibraryTotalSize} = libraryTotalSizeSlice.actions;