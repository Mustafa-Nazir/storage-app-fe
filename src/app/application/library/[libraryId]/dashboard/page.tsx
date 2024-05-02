"use client"
import DateLineChart from "@/components/ui/dateLineChart";
import DepartmentBarChart from "@/components/ui/departmentBarChart";
import UserPieChart from "@/components/ui/userPieChart";
import { changePageName } from "@/utilities/redux/slices/pageNameSlice";
import store from "@/utilities/redux/store";
import { useEffect } from "react";

export default function Dashboard() {

    useEffect(() => {
        store.dispatch(changePageName("Dashboard"));
    }, [])

    return (
        <div className="h-full m-5 bg-main rounded-2xl p-4 overflow-y-auto">
            <div className="flex h-full w-full">
                <div className="w-[60%] flex flex-col justify-between h-full">
                    <div className="h-[37%] bg-white p-4 mx-2 rounded-xl shadow-md">
                        <UserPieChart />
                    </div>
                    <div className="h-[60%] bg-white p-4 mx-2 rounded-xl shadow-md">
                        <DateLineChart />
                    </div>
                </div>
                <div className="w-[40%] h-full bg-white p-4 mx-2 rounded-xl shadow-md">
                    <DepartmentBarChart />
                </div>
            </div>
        </div>
    );
}