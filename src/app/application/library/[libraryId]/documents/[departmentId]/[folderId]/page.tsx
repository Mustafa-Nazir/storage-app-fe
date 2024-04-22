"use client"
import FolderPageUI from "@/components/ui/folderPageUI";

export default function FolderPage({ params }: { params: { folderId: string } }) {
    return (
        <FolderPageUI folderId={params.folderId}/>
    );
  }