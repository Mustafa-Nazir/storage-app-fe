"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [isLoaded , setIsLoaded] = useState(false);

    const router = useRouter();

    useEffect(()=>{
        const token = window.localStorage.getItem("token");
        if(!token){
            router.push("/auth/login");
            return;
        }
        setIsLoaded(true);
    },[])

    return (
        <>
            {isLoaded && children}
        </>
    );
}