"use client"
import AccountBox from "@/components/ui/accountBox";
import CreateCard from "@/components/ui/createCard";
import LibraryCard from "@/components/ui/libraryCard";
import Notification from "@/components/ui/notification";

export default function Library() {
    return (
        <div className="bg-main h-[100vh]">
            <div className="flex justify-end px-2 pt-2">
                <Notification />
                <AccountBox name="Example" lastName="User" />
            </div>
            <div className="h-[90%] w-[80%] flex items-center justify-center">
                <div className="grid items-center justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-[240px] overflow-x-auto">
                    <LibraryCard name="Example Card"/>
                    <CreateCard />
                </div>
            </div>
        </div>
    );
}