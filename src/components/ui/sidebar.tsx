"use client"
import SettingsIcon from "../icons/settingsIcon";
import SidebarButton from "./sidebarButton";

const Sidebar = () => {
    const createPath = (path:string):string => {
        const currentPath = (window.location.pathname).split("/").slice(0,4).join("/");
        return currentPath + path;
    }
    return (
        <div className="w-[200px] h-full bg-white mr-3 shadow-md">
            <div className="h-[90px] flex items-center justify-center my-3 font-bold text-3xl text-main-dark">LOGO</div>
            <div>
                <div className="px-3"><div className="w-full h-[1.5px] bg-gray-200 mb-5"></div></div>
                <SidebarButton name="Ayarlar" icon={SettingsIcon} redirect={createPath("/settings")}/>
            </div>
        </div>
    );
}

export default Sidebar;