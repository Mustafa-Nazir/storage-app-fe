"use client"
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import LibraryService from "@/services/library/libraryService";
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
    },[]);
    
    const userControl = async () => {
        const result = await LibraryService.UserControlByLibraryId(libraryId as string);
        if(!result.success) return router.push("/application/library");
        setIsLoaded(true);
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