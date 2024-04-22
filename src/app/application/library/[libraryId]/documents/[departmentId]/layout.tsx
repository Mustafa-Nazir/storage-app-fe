"use client"
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import Roles from "@/utilities/constants/roles";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DepartmentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    const [isLoaded , setIsLoaded] = useState(false);
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);
    const router = useRouter();
    const params = useParams();
    const departmentId = params.departmentId;
    const libraryId = params.libraryId;

    useEffect(()=>{
        departmentControl();
    },[userLibraryInfo.role]);

    const departmentControl = () => {
        const status = userLibraryInfo.role?.name == Roles.owner || libraryId == departmentId || userLibraryInfo.departments?.some(d => d._id == departmentId);
        if(status) return setIsLoaded(true);

        const path = `/application/library/${libraryId}/documents`;
        router.push(path);
    }

    return isLoaded && (children);
}