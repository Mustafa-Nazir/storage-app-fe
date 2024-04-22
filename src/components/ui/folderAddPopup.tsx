import { useState } from "react";
import Input from "./input";
import Popup from "./popup";
import Button from "./button";
import IFolder from "@/models/folder/IFolder";
import { useParams } from "next/navigation";
import FolderService from "@/services/folder/folderService";
import { toast } from "react-toastify";

interface features{
    isClicked:boolean,
    setIsClicked:Function,
    setFolders:Function
}
const FolderAddPopup = (features:features) => {
    const [folderName , setFolderName] = useState("");
    const [folderNameError , setFolderNameError] = useState(false);

    const params = useParams();
    const libraryId = params.libraryId as string;
    const folderId = params.folderId as string;
    const departmentId = params.departmentId as string;

    const inputControl = () => {
        const status = folderName.length <= 0;
        setFolderNameError(status);
        return status;
    }

    const addFolder = async () => {
        if(inputControl()) return;

        const _folderId = folderId ? folderId : departmentId;
        const data:IFolder = {
            name:folderName,
            currentFolderId:_folderId,
            libraryId:libraryId
        }

        const result = await FolderService.Add(data);
        if(!result.success) return toast.error(result.message);

        data._id = result.data;
        features.setFolders((prev:any) => [...prev , data])
        features.setIsClicked(false);
        setFolderName("");
        toast.success(result.message);
    }

    return (
        <Popup title="Klasör Ekle" isClicked={features.isClicked} setIsClicked={features.setIsClicked}>
            <div className="flex flex-col items-center pt-4">
                <div className="w-full">
                    <Input placeholder="Klasör İsmi" value={folderName} setValue={setFolderName} type="text" errorMessage="Klasör ismi boş olamaz" errorState={folderNameError}/>
                </div>
                <div className="mt-3 w-[180px]">
                    <Button name="Ekle" onClick={addFolder}/>
                </div>
            </div>
        </Popup>
    );
}

export default FolderAddPopup;