"use client"
import { useRouter } from "next/navigation";
import SettingsIcon from "../icons/settingsIcon";

interface features{
    icon:any,
    name:string,
    redirect:string;
}

const SidebarButton = (features:features) => {
    const router = useRouter();

    const redirect = () => {
        router.push(features.redirect);
    }

    return (
        <div onClick={redirect} className="group flex pl-5 text-gray-500 hover:bg-main-dark hover:text-white hover:rounded-r-xl hover:shadow-md cursor-pointer select-none py-2 mb-2 mr-1 text-lg">
            <div className="flex items-center mx-2"><features.icon className="group-hover:fill-white fill-gray-500" /></div>
            <div>{features.name}</div>
        </div>
    );
}

export default SidebarButton;