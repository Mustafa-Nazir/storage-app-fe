"use client"
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import LibraryService from "@/services/library/libraryService";
import { addUserLibraryInfo } from "@/utilities/redux/slices/userLibraryInfoSlice";
import store from "@/utilities/redux/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isLoaded , setIsLoaded] = useState(false);
    const router = useRouter();
    const params = useParams();
    const libraryId = params.libraryId;

    useEffect(()=>{
        userControl();
        setUserLibraryInfo();
    },[]);
    
    const userControl = async () => {
        const result = await LibraryService.UserControlByLibraryId(libraryId as string);
        if(!result.success) return router.push("/application/library");
        setIsLoaded(true);
    }

    const getUserDepartmentAndRole = async () => {
        const result = await LibraryService.GetUserDepartmentAndRole(libraryId as string);
        return result.data;
    }

    const setUserLibraryInfo = async () => {
        const data = await getUserDepartmentAndRole();
        store.dispatch(addUserLibraryInfo(data));
    }
    return isLoaded && (
        <div className="flex h-[100vh] bg-main">
            <Sidebar />
            <div className="flex-grow flex flex-col overflow-x-auto">
                <Header/>
                {children}
            </div>
        </div>
    );
}