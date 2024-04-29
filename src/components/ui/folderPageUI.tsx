import Container from "@/components/ui/container";
import Folder from "@/components/ui/folder";
import FolderPageHeader from "@/components/ui/folderPageHeader";
import IFileDto from "@/models/file/IFileDto";
import IFolder from "@/models/folder/IFolder";
import FileService from "@/services/file/fileService";
import FolderService from "@/services/folder/folderService";
import { changePageName } from "@/utilities/redux/slices/pageNameSlice";
import store from "@/utilities/redux/store";
import { useEffect, useState } from "react";
import Document from "./document";

interface features {
    folderId:string
}
const FolderPageUI = (features:features) => {
    const [folders , setFolders] = useState([] as IFolder[]);
    const [files , setFiles] = useState([] as IFileDto[]);

    useEffect(()=>{
        getFolders();
        getFiles();
        store.dispatch(changePageName("Belgeler"));
    },[])

    const mapFolders = () => {
        return (
            folders.map(folder => {
                return (
                    <Folder key={folder._id} name={folder.name} folderId={folder._id as string}/>
                );
            })
        );
    }

    const mapFiles = () => {
        return (
            files.map(file => {
                return (
                    <Document setDocuments={setFiles} key={file._id} fileDto={file}/>
                );
            })
        )
    }

    const getFolders = async () => {
        const result = await FolderService.GetAllByCurrentFolderId(features.folderId);
        setFolders(result.data as IFolder[]);
    }

    const getFiles = async () => {
        const result = await FileService.GetAllByFolderIdDto(features.folderId);
        setFiles(result.data as IFileDto[]);
    }

    return (
        <Container>
            <FolderPageHeader setFiles={setFiles} setFolders={setFolders}/>
            <div className="bg-gray-300 w-full h-[1px] my-1"></div>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-y-4 justify-items-center mt-4">
                {mapFolders()}
                {mapFiles()}
            </div>
        </Container>
    );
}

export default FolderPageUI;