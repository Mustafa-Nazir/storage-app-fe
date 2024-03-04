"use client"
import AccountBox from "@/components/ui/accountBox";
import CreateCard from "@/components/ui/createCard";
import Header from "@/components/ui/header";
import LibraryCard from "@/components/ui/libraryCard";
import Notification from "@/components/ui/notification";
import ILibrary from "@/models/library/ILibrary";
import LibraryService from "@/services/library/libraryService";
import { useEffect, useState } from "react";

export default function Library() {
    const [libraries , setLibraries] = useState([] as ILibrary[]);

    useEffect(()=>{
        loadLibraries();
    },[]);

    const loadLibraries = async () => {
        const result = await LibraryService.GetAll();
        setLibraries(result.data as ILibrary[]);
    }
    return (
        <div className="flex flex-col bg-main h-[100vh]">
            <Header/>
            <div className="h-[90%] w-[80%] flex items-center justify-center">
                <div className="grid items-center justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-[240px] overflow-x-auto">
                    {libraries?.map((lib,index) => {
                        return (
                            <LibraryCard key={index} name={lib.name} id={lib._id as string}/>
                        )
                    })}
                    <CreateCard setLibraries={setLibraries}/>
                </div>
            </div>
        </div>
    );
}