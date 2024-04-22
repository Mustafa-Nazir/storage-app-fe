import { useParams, useRouter } from "next/navigation";
import FolderIcon from "../icons/folderIcon";
import { useState } from "react";
import FolderOpenIcon from "../icons/folderOpenIcon";

interface features{
    name:string,
    folderId:string
}
const Folder = (features:features) => {
    const [hover,setHover] = useState(false);
    const params = useParams();
    const departmentId = params.departmentId;
    const router = useRouter();
    const redirect = () => {
        const sliceAmount = departmentId ? 6 : 5;
        const basePath = window.location.pathname.split("/").slice(0,sliceAmount).join("/");
        const path = `${basePath}/${features.folderId}`;
        router.push(path);
    }
    return (
        <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} onClick={redirect} className="flex flex-col items-center cursor-pointer hover:bg-gray-100 w-[100px] border-b-2 border-transparent hover:border-main-dark rounded-t-md hover:shadow-md">
            {!hover ? 
            <FolderIcon className="w-14 h-14 fill-main-dark" /> :
            <FolderOpenIcon className="w-14 h-14 fill-main-dark"/>}
            <div className="select-none">{features.name}</div>
        </div>
    );
}

export default Folder;