"use client"
import AccountBox from "./accountBox";
import Notification from "./notification";

const Header = () => {
    return (
        <div>
            <div className="flex justify-end px-2 pt-2 mr-1 mt-2">
                <Notification />
                <AccountBox name="Example" lastName="User" />
            </div>
        </div>

    );
}

export default Header;