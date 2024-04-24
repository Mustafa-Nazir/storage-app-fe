import IFileDto from "@/models/file/IFileDto";
import DeleteIcon from "../icons/deleteIcon";
import DocumentIcon from "../icons/documentIcon";
import DownloadIcon from "../icons/downloadIcon";
import VisibilityIcon from "../icons/visibilityIcon";
import Popup from "./popup";
import IUserInfo from "@/models/user/IUserInfo";
import { useSelector } from "react-redux";
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import Roles from "@/utilities/constants/roles";

interface features {
    isClicked: boolean,
    setIsClicked: Function,
    fileDto:IFileDto,
    documentColor:string
}
const DocumentInfoPopup = (features: features) => {
    const userInfo:IUserInfo = useSelector((state:any) => state.userInfo);
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);
    const buttonStyle = "flex cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-sm my-0.5"

    const deleteControl = ():boolean => {
        const status =  userInfo.email == features.fileDto.email ||
                        userLibraryInfo.role.name == Roles.owner ||
                        userLibraryInfo.role.name == Roles.admin;
        
        return status;
    }

    const previewControl = ():boolean => {
        const status = features.fileDto.name.split(".").pop() == "pdf";
        return status && !features.fileDto.encrypted;
    }
    return (
        <Popup title="Belge Hakkında" isClicked={features.isClicked} setIsClicked={features.setIsClicked}>
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex">
                    <div className="w-24 justify-center items-center hidden sm:flex"><DocumentIcon className={`w-14 h-14 ${features.documentColor}`}/></div>
                    <div className="grid grid-cols-2 gap-y-2">
                        <div className="font-bold">Dosya Adı:</div>
                        <div>{features.fileDto.name}</div>
                        <div className="font-bold">Ekleyen Email:</div>
                        <div>{features.fileDto.email}</div>
                        <div className="font-bold">Eklenme Tarihi:</div>
                        <div>{features.fileDto.date.toString().split("T")[0]}</div>
                    </div>
                </div>
                <div className="my-3 ml-7">
                    <div className={buttonStyle}>
                        <DownloadIcon className="fill-main-dark"/>
                        <a href={features.fileDto.url} download><div className="ml-1">İndir</div></a>
                    </div>
                    {deleteControl() && <div className={buttonStyle}>
                        <DeleteIcon className="fill-red-500"/>
                        <div className="ml-1">Sil</div>
                    </div>}
                    {previewControl() && <div className={buttonStyle}>
                        <VisibilityIcon className="fill-main-dark"/>
                        <div className="ml-1">Önizleme</div>
                    </div>}
                </div>
            </div>
        </Popup>
    );
}

export default DocumentInfoPopup;