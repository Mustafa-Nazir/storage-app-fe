import { useState } from "react";
import DocumentIcon from "../icons/documentIcon";
import DocumentInfoPopup from "./documentInfoPopup";
import IFileDto from "@/models/file/IFileDto";
import LockIcon from "../icons/lockIcon";

interface features {
    fileDto:IFileDto
}
const Document = (features: features) => {
    const [isClicked, setIsClicked] = useState(false);

    const getFileName = () => {
        const amount = 7;
        const status = features.fileDto.name.length > amount ? "..." :"";
        return features.fileDto.name.slice(0,amount) + status;

    };

    const getDocumentColor = () => {
        const fileType = features.fileDto.name.split(".").pop();
        const color =   fileType == "pdf" ? "fill-red-500" :
                        fileType == "docx" ? "fill-blue-500" :
                        fileType == "xlsx" ? "fill-green-500" :
                        "fill-gray-500";
        return color;
    }

    const documentColor = getDocumentColor();
    return (
        <>
            <div onClick={() => { setIsClicked(true) }} className="flex flex-col items-center cursor-pointer hover:bg-gray-100 w-[100px] border-b-2 border-transparent hover:border-main-dark rounded-t-md hover:shadow-md">
                {features.fileDto.encrypted && <div className="relative"><div className="absolute right-6 top-1"><LockIcon className="fill-gray-400 w-5 h-5"/></div></div>}
                <DocumentIcon className={`w-14 h-14 ${documentColor}`} />
                <div className="text-center">{getFileName()}</div>
            </div>
            <DocumentInfoPopup documentColor={documentColor} fileDto={features.fileDto} isClicked={isClicked} setIsClicked={setIsClicked}/>
        </>

    );
}

export default Document;