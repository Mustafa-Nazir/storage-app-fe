"use client"
import AccountBox from "@/components/ui/accountBox";
import Notification from "@/components/ui/notification";

export default function Library() {
    return (
        <div className="bg-main h-[100vh]">
            <div className="flex justify-end px-2 pt-2">
                <Notification/>
                <AccountBox name="Example" lastName="User" />
            </div>
        </div>
    );
}