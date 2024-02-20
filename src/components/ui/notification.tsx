import { useState } from "react";
import NotificationIcon from "../icons/notificationIcon";
import BackgroundCover from "./backgroundCover";

const Notification = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="relative">
            <div className="relative cursor-pointer h-full">
                <div className="absolute w-[10px] h-[10px] rounded-full bg-red-dark right-5 top-3 border border-red-light"></div>
                <div className="flex items-center justify-center h-full mr-3" onClick={() => setIsClicked(!isClicked)}><NotificationIcon className="fill-main-dark w-9 h-9" /></div>
            </div>
            {isClicked && (<div className="absolute right-4 top-14 rounded-lg border-2 border-gray-300 overflow-hidden">
                <div className="bg-white w-full px-4 py-1 hover:bg-gray-100 cursor-pointer select-none whitespace-nowrap">...</div>
            </div>)}
        </div>

    );
}

export default Notification