"use client"
import AccountBox from "./accountBox";
import NotificationManagement from "./notificationManagement";

const Header = () => {
    return (
        <div>
            <div className="flex justify-end px-2 pt-2 mr-1 mt-2">
                <NotificationManagement/>
                <AccountBox/>
            </div>
        </div>

    );
}

export default Header;