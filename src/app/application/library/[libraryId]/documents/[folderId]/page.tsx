"use client"
import Container from "@/components/ui/container";
import Folder from "@/components/ui/folder";
import FolderPageHeader from "@/components/ui/folderPageHeader";
import IFolder from "@/models/folder/IFolder";
import FolderService from "@/services/folder/folderService";
import { changePageName } from "@/utilities/redux/slices/pageNameSlice";
import store from "@/utilities/redux/store";
import { useEffect, useState } from "react";

export default function FolderPage({ params }: { params: { folderId: string } }) {
    const [folders , setFolders] = useState([] as IFolder[]);

    useEffect(()=>{
        getFolders();
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

    const getFolders = async () => {
        const result = await FolderService.GetAllByCurrentFolderId(params.folderId);
        setFolders(result.data as IFolder[]);
    }
    return (
        <Container>
            <FolderPageHeader setFolders={setFolders}/>
            <div className="bg-gray-300 w-full h-[1px] my-1"></div>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-y-4 justify-items-center mt-4">
                {mapFolders()}
            </div>
        </Container>
    );
  }