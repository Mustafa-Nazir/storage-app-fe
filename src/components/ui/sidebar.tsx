"use client"
import { useEffect, useState } from "react";
import SettingsIcon from "../icons/settingsIcon";
import SidebarButton from "./sidebarButton";
import TableRowsIcon from "../icons/tableRowsIcon";

const Sidebar = () => {
    const [path,setPath] = useState("");
    const createPath = (redirectPath:string):string => {
        const currentPath = path.split("/").slice(0,4).join("/");
        return currentPath + redirectPath;
    }

    useEffect(()=>{
        setPath(window.location.pathname)
    },[])
    return (
        <div className="w-[200px] h-full bg-white mr-3 shadow-md">
            <div className="h-[90px] flex items-center justify-center my-3 font-bold text-3xl text-main-dark">LOGO</div>
            <div>
                <div className="px-3"><div className="w-full h-[1.5px] bg-gray-200 mb-5"></div></div>
                <SidebarButton name="Duyurular" icon={TableRowsIcon} redirect={createPath("/announcements")}/>
                <SidebarButton name="Ayarlar" icon={SettingsIcon} redirect={createPath("/settings")}/>
            </div>
        </div>
    );
}

export default Sidebar;