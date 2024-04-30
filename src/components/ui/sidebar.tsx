"use client"
import { useEffect, useState } from "react";
import SettingsIcon from "../icons/settingsIcon";
import SidebarButton from "./sidebarButton";
import TableRowsIcon from "../icons/tableRowsIcon";
import LibrariesIcon from "../icons/librariesIcon";
import FolderIcon from "../icons/folderIcon";
import LogoFull from "./logoFull";
import SettingsControl from "../utilities/settingsControl";
import LibrarySizeBar from "./librarySizeBar";
import DashboardIcon from "../icons/dashboardIcon";

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
            <div className="h-[90px] flex items-center justify-center my-3"><LogoFull width={65} isFlexCol={true} textSize="text-xl"/></div>
            <div className="h-[80%] flex flex-col justify-between">
                <div>
                    <div className="px-3"><div className="w-full h-[1.5px] bg-gray-200 mb-5"></div></div>
                    <SidebarButton name="Duyurular" icon={TableRowsIcon} redirect={createPath("/announcements")}/>
                    <SidebarButton name="Belgeler" icon={FolderIcon} redirect={createPath("/documents")}/>
                    <SettingsControl><SidebarButton name="Dashboard" icon={DashboardIcon} redirect={createPath("/dashboard")}/></SettingsControl>
                    <SettingsControl><SidebarButton name="Ayarlar" icon={SettingsIcon} redirect={createPath("/settings")}/></SettingsControl>
                </div>
                <div>
                    <SidebarButton name="Kütüphaneler" icon={LibrariesIcon} redirect={"/application/library"}/>
                    <LibrarySizeBar/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;