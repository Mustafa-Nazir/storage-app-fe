import { useState } from "react";
import AccountIcon from "../icons/accountIcon";
import SettingsIcon from "../icons/settingsIcon";
import BackgroundCover from "./backgroundCover";
import { useRouter } from "next/navigation";

interface features {
    name: string,
    lastName: string,
}

const AccountBox = (features: features) => {
    const [isClicked, setIsClicked] = useState(false);

    const router = useRouter();

    const toggle = () => {
        setIsClicked(!isClicked);
    }

    const closeOnLeave = () => {
        if(isClicked) setIsClicked(false);
    }

    const logout = () => {
        window.localStorage.removeItem("token");
        router.push("/auth/login");
        return;
    }

    return (
        <div className="relative" onMouseLeave={closeOnLeave}>
            <div className="bg-white w-fit h-[50px] rounded-xl flex items-center overflow-hidden border-2 border-gray-300">
                <div className="px-3 h-full flex items-center bg-main-light border-r-2 border-purple-light"><div><AccountIcon className="fill-white" /></div></div>
                <div className="px-2 text-gray-900">{features.name} {features.lastName}</div>
                <div className="px-2 cursor-pointer" onClick={toggle}><SettingsIcon className="fill-gray-500" /></div>
            </div>
            {isClicked && (<div className="absolute right-4 top-13 rounded-lg border-2 border-gray-300 overflow-hidden">
                    <div onClick={logout} className="bg-white w-full px-4 py-1 hover:bg-gray-100 cursor-pointer select-none">Çıkış Yap</div>
                </div>)}
        </div>

    );
}

export default AccountBox;