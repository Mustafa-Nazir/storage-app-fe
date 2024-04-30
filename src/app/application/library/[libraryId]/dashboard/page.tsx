"use client"
import { changePageName } from "@/utilities/redux/slices/pageNameSlice";
import store from "@/utilities/redux/store";
import { useEffect } from "react";

export default function Dashboard() {

    useEffect(()=>{
        store.dispatch(changePageName("Dashboard"));
    },[])

    return (
        <div></div>
    );
}