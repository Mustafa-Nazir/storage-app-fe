import { useState } from "react";
import NotificationIcon from "../icons/notificationIcon";

interface features{
    status:boolean,
    children:any[]
}

const Notification = (features:features) => {
    const [isClicked, setIsClicked] = useState(false);

    const toggle = () => {
        setIsClicked(!isClicked);
    }

    const closeOnLeave = () => {
        if(isClicked) setIsClicked(false);
    }
    return (
        <div className="relative" onMouseLeave={closeOnLeave}>
            <div className="relative cursor-pointer h-full" onClick={toggle}>
                {features.status && <div className="absolute w-[10px] h-[10px] rounded-full bg-red-dark right-5 top-3 border border-red-light"></div>}
                <div className="flex items-center justify-center h-full mr-3"><NotificationIcon className="fill-main-dark w-9 h-9" /></div>
            </div>
            {isClicked && (<div className="absolute right-4 top-10 rounded-lg border-2 border-gray-300 overflow-hidden">
                {features.children.map((c , index)=>{
                    return <div key={index} className="bg-white w-full px-4 py-1 hover:bg-gray-100 select-none whitespace-nowrap">{c}</div>
                })}
            </div>)}
        </div>

    );
}

export default Notification