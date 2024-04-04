import { IAnnouncement } from "@/models/announcement/IAnnouncement";
import DeleteIcon from "../icons/deleteIcon";
import VisibilityIcon from "../icons/visibilityIcon";
import AnnouncementService from "@/services/announcement/announcementService";
import { toast } from "react-toastify";
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import { useSelector } from "react-redux";
import Roles from "@/utilities/constants/roles";
import { useState } from "react";
import AnnouncementContentPopup from "./announcementContentPopup";

interface features {
    announcements: IAnnouncement[],
    setAnnouncements: Function
}
const AnnouncementTable = (features: features) => {
    const [isClickedToShow, setIsClickedToShow] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);

    const deleteControl = userLibraryInfo.role?.name == Roles.owner || userLibraryInfo.role?.name == Roles.admin;

    const deleteAnnouncement = async (id: string) => {
        const result = await AnnouncementService.DeleteById(id);
        return result;
    }

    const onClickDelete = async (id: string) => {
        const result = await deleteAnnouncement(id);
        if (!result.success) toast.error(result.message);
        const newAnnouncements = features.announcements.filter(a => a._id != id);
        features.setAnnouncements(newAnnouncements);
        toast.success(result.message);
    }

    const onClickShow = (title: string, content: string) => {
        setTitle(title);
        setContent(content);
        setIsClickedToShow(true);
    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-500">
                    <thead className="text-md text-gray-700 bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Başlık</th>
                            <th className="px-6 py-3">Ekleyen Email</th>
                            <th className="px-6 py-3">Eklenme Tarihi</th>
                            <th className="px-1 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.announcements.map((announcement, index) => {
                            return (
                                <tr key={index} className="bg-white border-b text-center hover:bg-gray-100">
                                    <td className="px-6 py-4">{announcement.title}</td>
                                    <td className="px-6 py-4">{announcement.email}</td>
                                    <td className="px-6 py-4">{announcement.date.split("T")[0]}</td>
                                    <td className="px-1 py-4">
                                        <div className="flex justify-center">
                                            <div onClick={() => { onClickShow(announcement.title, announcement.content) }} className="cursor-pointer px-1"><VisibilityIcon className="fill-main-dark hover:fill-main-light" /></div>
                                            {deleteControl && <div onClick={() => { onClickDelete(announcement._id as string) }} className="cursor-pointer px-1"><DeleteIcon className="fill-red-500 hover:fill-red-400" /></div>}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <AnnouncementContentPopup content={content} title={title} isClicked={isClickedToShow} setIsClicked={setIsClickedToShow}/>
        </>

    );
}

export default AnnouncementTable;