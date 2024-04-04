import IUserInfo from "@/models/user/IUserInfo";
import Header from "./header";
import { useSelector } from "react-redux";
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import { useEffect, useState } from "react";
import Roles from "@/utilities/constants/roles";

const LibraryHeader = () => {
    const [role , setRole] = useState("");
    const [department , setDepartment] = useState("");
    const [email , setEmail] = useState("");
    const selector = useSelector((state:any) => state);
    const userInfo:IUserInfo = selector.userInfo;
    const userLibraryInfo:IUserLibraryDto = selector.userLibraryInfo;
    const pageName:string = selector.pageName.name;
    
    useEffect(()=>{
        fillStates();
    },[userInfo,userLibraryInfo])

    const fillStates = () => {
        if(!userInfo?.name || !userLibraryInfo?.role?.name) return;
        setRole(userLibraryInfo.role.name);
        setDepartment(userLibraryInfo.role.name == Roles.owner ? "-" : userLibraryInfo.departments[0].name)
        setEmail(userInfo.email)
    }

    return (
        <div className="flex justify-between">
            <div className="flex items-end mb-1 pl-5 text-2xl font-bold">{pageName}</div>
            <div className="flex">
                <div className="flex items-end mb-1 mr-3">
                    <div className="flex">
                        <div>{email}</div>
                        <div className="flex items-center"><div className="border-l border-main-light mx-3 h-4"></div></div>
                        <div className="capitalize">{department}</div>
                        <div className="flex items-center"><div className="border-l border-main-light mx-3 h-4"></div></div>
                        <div className="capitalize">{role}</div>
                    </div>
                </div>
                <Header />
            </div>
        </div>
    );
}

export default LibraryHeader;