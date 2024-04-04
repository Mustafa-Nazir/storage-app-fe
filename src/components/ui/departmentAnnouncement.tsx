"use client"
import { IAnnouncement } from "@/models/announcement/IAnnouncement";
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import AnnouncementService from "@/services/announcement/announcementService";
import { useState } from "react";
import { useSelector } from "react-redux";
import AnnouncementTable from "./announcementTable";
import ArrowBackIcon from "../icons/arrowBackIcon";

interface features{
    setCategory:Function,
    announcements:IAnnouncement[],
    setAnnouncements:Function,
}

const DepartmentAnnouncement = (features:features) => {
    const [isClicked , setIsClicked] = useState(false);
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);
    
    const getDepartmentAnnouncement = async (id:string) => {
        const result = await AnnouncementService.GetAllByCategoryId(id);
        features.setAnnouncements(result.data as IAnnouncement[]);
    }

    const onClickDepartment = (id:string,name:string) => {
        getDepartmentAnnouncement(id);
        features.setCategory({_id:id,name:name})
        setIsClicked(true);
    }

    const onClickBack = () => {
        setIsClicked(false);
    }
    return !isClicked ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 mt-4">
            {userLibraryInfo.departments.map((department,index)=>{
                return (
                    <div onClick={()=>onClickDepartment(department._id,department.name)} className="px-3 py-3 text-center cursor-pointer lg:mx-12 border-b-2 border-transparent hover:border-main-dark hover:bg-gray-100" key={department._id}>
                        <div>{department.name}</div>
                    </div>
                );
            })}
        </div>
    ) : (
        <div className="relative">
        <div onClick={onClickBack} className="absolute left-2 top-2.5 cursor-pointer"><ArrowBackIcon className="fill-main-dark hover:fill-main-light"/></div>
        <AnnouncementTable setAnnouncements={features.setAnnouncements} announcements={features.announcements}/>
        </div>
        
    );
}

export default DepartmentAnnouncement;