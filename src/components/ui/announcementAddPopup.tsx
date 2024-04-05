"use client"
import {useState } from "react";
import Input from "./input";
import Popup from "./popup";
import Button from "./button";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { IAnnouncement } from "@/models/announcement/IAnnouncement";
import IUserInfo from "@/models/user/IUserInfo";
import { useSelector } from "react-redux";
import AnnouncementService from "@/services/announcement/announcementService";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface features {
    setIsClicked: Function,
    isClicked: boolean,
    category: { _id: string, name: string },
    setAnnouncements:Function,
}
const AnnouncementAddPopup = (features: features) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [content, setContent] = useState("");
    const userInfo:IUserInfo = useSelector((state:any) => state.userInfo);

    const inputControl = () => {
        const _title = title.length <= 0 ;
        setTitleError(_title);

        const _content = content.length <= 0;
        if(_content) toast.error("İçerik boş bırakılamaz")

        return [_title , _content].some(i => i == true);
    }
    
    const addAnnouncement = async () => {
        if(inputControl()) return;
        
        const data:IAnnouncement = {
            title:title,
            content:content,
            email:userInfo.email,
            categoryId:features.category._id,
            date:(new Date()).toISOString()
        }

        const result = await AnnouncementService.Add(data);
        if(!result.success) return toast.error(result.message);
        toast.success(result.message);
        features.setIsClicked(false);
        data._id = result.data;
        features.setAnnouncements((prev:any) => [...prev , data]);
        setTitle("");
        setContent("");
    }
    return (
        <Popup isClicked={features.isClicked} setIsClicked={features.setIsClicked} title="Duyuru Ekle">
            <div className="px-2 py-3 max-h-80 overflow-y-auto">
                <Input placeholder="Başlık" setValue={setTitle} type="text" value={title} errorMessage="Başıl boş bırakılamaz" errorState={titleError}/>
                <Input placeholder="Kategori" setValue={() => { }} type="text" value={features.category.name} disabled={true} />
                <div className="pl-2 text-main-light mb-1">İçerik</div>
                <ReactQuill value={content} onChange={setContent}/>
            </div>
            <div className="flex justify-center mt-2">
                <div className="w-[180px]"><Button name="Ekle" onClick={addAnnouncement} /></div>
            </div>
        </Popup>
    );
}

export default AnnouncementAddPopup;