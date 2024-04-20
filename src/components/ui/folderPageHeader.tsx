"use client"
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import CreateNewFolderIcon from "../icons/createNewFolderIcon";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import FolderAddPopup from "./folderAddPopup";
import { useEffect, useState } from "react";
import HomeIcon from "../icons/homeIcon";
import FolderService from "@/services/folder/folderService";
import DocumentAddIcon from "../icons/documentAddIcon";
import DocumentAddPopup from "./documentAddPopup";

interface features{
    setFolders:Function
}

const FolderPageHeader = (features:features) => {
    const [isClicked , setIsClicked] = useState(false);
    const [isClickedToDocumentAdd , setIsClickedToDocumentAdd] = useState(false);
    const [folderName , setFolderName] = useState("")
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);
    const router = useRouter();
    const params = useParams();
    const libraryId = params.libraryId as string;
    const folderId = params.folderId as string;

    useEffect(()=>{
        changeFolderName();
    },[]);

    const changeFolderName = async () => {
        const name = await getFolderName();
        setFolderName(name);
    };
    const getFolderName = async () => {
        if (libraryId == folderId) return "Genel";
        const department = userLibraryInfo.departments?.find(d => d._id == folderId);
        if (department) return department.name;

        const result = await FolderService.GetFolderNameById(folderId);
        if(result.success) return result.data as string;
        return "Folder Name";
    }

    const redirectToDocumentsPage = () => {
        router.push(`/application/library/${libraryId}/documents`);
    }
    return (
        <>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="flex items-center pt-1">
                        <div onClick={redirectToDocumentsPage} className="mx-1 cursor-pointer"><HomeIcon className="fill-main-dark hover:fill-main-light"/></div>
                    </div>
                    <div className="flex items-center pl-2 pt-2 text-xl font-bold ml-2">{folderName}</div>
                </div>
                
                <div className="flex">
                    <div onClick={()=>{setIsClicked(true)}} className="flex items-center pt-2 cursor-pointer"><CreateNewFolderIcon className="w-8 h-8 fill-main-dark hover:fill-main-light" /></div>
                    <div onClick={()=>{setIsClickedToDocumentAdd(true)}} className="flex items-center pt-2 cursor-pointer"><DocumentAddIcon className="w-8 h-8 fill-main-dark hover:fill-main-light" /></div>
                </div>
            </div>

            <FolderAddPopup setFolders={features.setFolders} isClicked={isClicked} setIsClicked={setIsClicked}/>
            <DocumentAddPopup setFiles={()=>{}} isClicked={isClickedToDocumentAdd} setIsClicked={setIsClickedToDocumentAdd}/>
        </>

    );
}

export default FolderPageHeader;