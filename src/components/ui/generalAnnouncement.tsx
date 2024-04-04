"use client"
import { IAnnouncement } from "@/models/announcement/IAnnouncement";
import AnnouncementService from "@/services/announcement/announcementService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AnnouncementTable from "./announcementTable";

interface features{
    setCategory:Function,
    announcements:IAnnouncement[],
    setAnnouncements:Function,
}
const GeneralAnnouncement = (features:features) => {
    
    const params = useParams();
    const libraryId = params.libraryId as string;

    useEffect(()=>{
        getGeneralAnnouncement();
        features.setCategory({_id:libraryId , name:"Genel"})
    },[])

    const getGeneralAnnouncement = async () => {
        const result = await AnnouncementService.GetAllByCategoryId(libraryId);
        features.setAnnouncements(result.data as IAnnouncement[]);
    }
    return (
        <AnnouncementTable setAnnouncements={features.setAnnouncements} announcements={features.announcements}/>
    );
}

export default GeneralAnnouncement;