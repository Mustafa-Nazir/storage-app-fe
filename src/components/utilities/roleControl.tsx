"use client"
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import { useSelector } from "react-redux";

interface features{
    children:any,
    roles:string[]
}
const RoleControl = (features:features) => {
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);

    const control = () => {
        let status = false;
        for (let i = 0; i < features.roles.length; i++) {
            status = userLibraryInfo.role?.name == features.roles[i];
            if(status) break;
        }

        return status;
    }

    return control() && features.children;
}

export default RoleControl;