"use client"
import FolderPageUI from "@/components/ui/folderPageUI";

export default function DepartmentFolderPage({ params }: { params: { departmentId: string } }){
    return (
        <FolderPageUI folderId={params.departmentId}/>
    );
}