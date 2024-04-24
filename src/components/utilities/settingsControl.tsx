"use client"
import Roles from "@/utilities/constants/roles";
import RoleControl from "./roleControl";

const SettingsControl = ({
    children
}:any) => {
    return <RoleControl roles={[Roles.admin,Roles.owner]}>{children}</RoleControl>;
}

export default SettingsControl;