import { useState } from "react";
import AccountIcon from "../icons/accountIcon";
import SettingsIcon from "../icons/settingsIcon";
import BackgroundCover from "./backgroundCover";

interface features {
    name: string,
    lastName: string,
}

const AccountBox = (features: features) => {
    const [isClick, setIsClick] = useState(false);

    return (
        <div className="relative">
            <div className="z-20 relative bg-white w-fit h-[50px] rounded-xl flex items-center overflow-hidden border-2 border-gray-300">
                <div className="px-3 h-full flex items-center bg-main-light border-r-2 border-purple-light"><div><AccountIcon color="fill-white" /></div></div>
                <div className="px-2 text-gray-900">{features.name} {features.lastName}</div>
                <div className="px-2 cursor-pointer" onClick={() => setIsClick(!isClick)}><SettingsIcon color="fill-gray-500" /></div>
            </div>
            {isClick && (<div className="z-20 absolute right-4 top-14 rounded-lg border-2 border-gray-300 overflow-hidden">
                    <div className="bg-white w-full px-4 py-1 hover:bg-gray-100 cursor-pointer select-none">Çıkış Yap</div>
                </div>)}
            {isClick && (<BackgroundCover closeFunction={setIsClick}/>)}
        </div>

    );
}

export default AccountBox;