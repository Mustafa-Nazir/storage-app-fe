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
            <div className="absolute w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="grid items-center justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-[240px] overflow-x-auto">
                    <LibraryCard name="Example Card"/>
                    <CreateCard />
                </div>
            </div>
        </div>
    );
}