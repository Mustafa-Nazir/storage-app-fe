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
import PdfPreviewPopup from "./pdfPreviewPopup";
import { useState } from "react";
import PasswordConfirmationPopup from "./passwordConfirmationPopup";
import IFile from "@/models/file/IFile";
import FileService from "@/services/file/fileService";
import { toast } from "react-toastify";

interface features {
    isClicked: boolean,
    setIsClicked: Function,
    fileDto: IFileDto,
    documentColor: string
}
const DocumentInfoPopup = (features: features) => {
    const [isClickedPreview, setIsClickedPreview] = useState(false);
    const [isClickedPwConfirmDelete, setIsClickedPwConfirmDelete] = useState(false);
    const [isClickedPwConfirmDownload, setIsClickedPwConfirmDownload] = useState(false);
    const [password, setPassword] = useState("");

    const userInfo: IUserInfo = useSelector((state: any) => state.userInfo);
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);
    const buttonStyle = "flex cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-sm my-0.5"

    const deleteControl = (): boolean => {
        const status = userInfo.email == features.fileDto.email ||
            userLibraryInfo.role.name == Roles.owner ||
            userLibraryInfo.role.name == Roles.admin;

        return status;
    }

    const previewControl = (): boolean => {
        const status = features.fileDto.name.split(".").pop() == "pdf";
        return status && !features.fileDto.encrypted;
    }

    const onClickedToPreview = () => {
        setIsClickedPreview(true);
    }

    const downloadForEncrypted = () => {

    }

    const deleteForEncrypted = async () => {
        const data:IFile = {
            libraryId:features.fileDto.libraryId,
            folderId:features.fileDto.folderId,
            name:features.fileDto.name,
            _id:features.fileDto._id,
            password:password
        } as IFile;

        const result = await FileService.DeleteEncrypted(data);
        if(!result.success) return toast.error(result.message);
        toast.success(result.message);
        setIsClickedPwConfirmDelete(false);
        features.setIsClicked(false);
    }

    const deleteForUnencrypted = async () => {
        const data:IFile = {
            libraryId:features.fileDto.libraryId,
            folderId:features.fileDto.folderId,
            name:features.fileDto.name,
            _id:features.fileDto._id
        } as IFile

        const result = await FileService.DeleteUnencrypted(data);
        if(!result.success) return toast.error(result.message);
        toast.success(result.message);
        features.setIsClicked(false);
    }

    const deleteHandle = () => {
        if (features.fileDto.encrypted) return setIsClickedPwConfirmDelete(true);

        deleteForUnencrypted();
    }

    const DownloadButton = () => {
        return (
            <div className={buttonStyle}>
                <DownloadIcon className="fill-main-dark" />
                <div className="ml-1">İndir</div>
            </div>
        );
    }
    return (
        <>
            <Popup title="Belge Hakkında" isClicked={features.isClicked} setIsClicked={features.setIsClicked}>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex">
                        <div className="w-24 justify-center items-center hidden sm:flex"><DocumentIcon className={`w-14 h-14 ${features.documentColor}`} /></div>
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
                        {
                            features.fileDto.encrypted ? <div onClick={()=>{setIsClickedPwConfirmDownload(true)}}><DownloadButton/></div>
                            :<a href={features.fileDto.url} download><DownloadButton/></a>
                        }
                        {deleteControl() && <div onClick={deleteHandle} className={buttonStyle}>
                            <DeleteIcon className="fill-red-500" />
                            <div className="ml-1">Sil</div>
                        </div>}
                        {previewControl() &&
                            <div onClick={onClickedToPreview} className={buttonStyle}>
                                <VisibilityIcon className="fill-main-dark" />
                                <div className="ml-1">Önizleme</div>
                            </div>
                        }
                    </div>
                </div>
            </Popup>
            <PdfPreviewPopup isClicked={isClickedPreview} setIsClicked={setIsClickedPreview} fileName={features.fileDto.name} url={features.fileDto.url} />
            <PasswordConfirmationPopup onClickedHandle={deleteForEncrypted} isClicked={isClickedPwConfirmDelete} setIsClicked={setIsClickedPwConfirmDelete} value={password} setValue={setPassword} />
            <PasswordConfirmationPopup onClickedHandle={downloadForEncrypted} isClicked={isClickedPwConfirmDownload} setIsClicked={setIsClickedPwConfirmDownload} value={password} setValue={setPassword} />
        </>

    );
}

export default DocumentInfoPopup;