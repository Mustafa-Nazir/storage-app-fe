"use client"
import AnnouncementAddIcon from "@/components/icons/announcementAddIcon";
import AnnouncementAddPopup from "@/components/ui/announcementAddPopup";
import Container from "@/components/ui/container";
import DepartmentAnnouncement from "@/components/ui/departmentAnnouncement";
import GeneralAnnouncement from "@/components/ui/generalAnnouncement";
import { IAnnouncement } from "@/models/announcement/IAnnouncement";
import AnnouncementType from "@/utilities/constants/announcementType";
import { changePageName } from "@/utilities/redux/slices/pageNameSlice";
import store from "@/utilities/redux/store";
import { useEffect, useState } from "react";

export default function Announcements() {
    const [announcements, setAnnouncements] = useState([] as IAnnouncement[]);
    const [announcementType, setAnnouncementType] = useState(AnnouncementType.general);
    const [isClickedToAdd , setIsClickedToAdd] = useState(false);
    const [category , setCategory] = useState({} as {_id:string,name:string});

    useEffect(()=>{
        store.dispatch(changePageName("Duyurular"));
    },[])

    const onclickGeneral = () => {
        setAnnouncementType(AnnouncementType.general);
    }

    const onclickDepartment = () => {
        setAnnouncementType(AnnouncementType.department);
    }

    const tabClass = (type: number) => {
        const style = "mx-2 p-2 cursor-pointer hover:bg-gray-100";
        return type == announcementType ? `${style} border-b-2 border-main-dark` : style;
    }

    const onClikedToAdd = () => {
        setIsClickedToAdd(prev=>!prev)
    }
    return (
        <Container>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div onClick={onclickGeneral} className={tabClass(AnnouncementType.general)}>Genel</div>
                    <div onClick={onclickDepartment} className={tabClass(AnnouncementType.department)}>Departman</div>
                </div>
                <div onClick={onClikedToAdd} className="flex items-center pt-2 cursor-pointer"><AnnouncementAddIcon className="w-8 h-8 fill-main-dark hover:fill-main-light"/></div>
            </div>

            <div className="bg-gray-300 w-full h-[1px] my-1"></div>
            
            {announcementType == AnnouncementType.general ? <GeneralAnnouncement announcements={announcements} setAnnouncements={setAnnouncements} setCategory={setCategory}/> : <DepartmentAnnouncement announcements={announcements} setAnnouncements={setAnnouncements} setCategory={setCategory}/>}

            <AnnouncementAddPopup setAnnouncements={setAnnouncements} category={category} isClicked={isClickedToAdd} setIsClicked={setIsClickedToAdd}/>
        </Container>
    );
}