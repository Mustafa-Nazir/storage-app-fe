import { createSlice } from "@reduxjs/toolkit";

export const pageNameSlice = createSlice({
    name:"pageName",
    initialState:{name:""} as {name:string},
    reducers:{
        changePageName:(state,action) => {
            const name:string = action.payload;
            state.name = name;
        }
    }
})

export const {changePageName} = pageNameSlice.actions;