import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import CreateNewFolderIcon from "../icons/createNewFolderIcon";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import FolderAddPopup from "./folderAddPopup";
import { useState } from "react";

interface features{
    setFolders:Function
}

const FolderPageHeader = (features:features) => {
    const [isClicked , setIsClicked] = useState(false);
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);
    const params = useParams();
    const libraryId = params.libraryId as string;
    const folderId = params.folderId as string;

    const getFolderName = () => {
        if (libraryId == folderId) return "Genel";
        const department = userLibraryInfo.departments?.find(d => d._id == folderId);
        if (department) return department.name;
        return "Folder Name";
    }
    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-center pl-2 pt-2 text-xl font-bold">{getFolderName()}</div>
                <div onClick={()=>{setIsClicked(true)}} className="flex items-center pt-2 cursor-pointer"><CreateNewFolderIcon className="w-8 h-8 fill-main-dark hover:fill-main-light" /></div>
            </div>

            <FolderAddPopup setFolders={features.setFolders} isClicked={isClicked} setIsClicked={setIsClicked}/>
        </>

    );
}

export default FolderPageHeader;