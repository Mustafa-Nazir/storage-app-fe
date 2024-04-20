import DeleteIcon from "../icons/deleteIcon";
import DocumentIcon from "../icons/documentIcon";
import DownloadIcon from "../icons/downloadIcon";
import VisibilityIcon from "../icons/visibilityIcon";
import Popup from "./popup";

interface features {
    isClicked: boolean,
    setIsClicked: Function,
}
const DocumentInfoPopup = (features: features) => {
    const buttonStyle = "flex cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-sm my-0.5"
    return (
        <Popup title="Belge Hakkında" isClicked={features.isClicked} setIsClicked={features.setIsClicked}>
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="flex">
                    <div className="w-24 justify-center items-center hidden sm:flex"><DocumentIcon className="w-14 h-14 fill-gray-500"/></div>
                    <div className="grid grid-cols-2 gap-y-2">
                        <div className="font-bold">Dosya Adı:</div>
                        <div>My Document</div>
                        <div className="font-bold">Ekleyen Email:</div>
                        <div>deneme@deneme.com</div>
                        <div className="font-bold">Eklenme Tarihi:</div>
                        <div>2024-01-01</div>
                    </div>
                </div>
                <div className="my-3 ml-7">
                    <div className={buttonStyle}>
                        <DownloadIcon className="fill-main-dark"/>
                        <div className="ml-1">İndir</div>
                    </div>
                    <div className={buttonStyle}>
                        <DeleteIcon className="fill-red-500"/>
                        <div className="ml-1">Sil</div>
                    </div>
                    <div className={buttonStyle}>
                        <VisibilityIcon className="fill-main-dark"/>
                        <div className="ml-1">Önizleme</div>
                    </div>
                </div>
            </div>
        </Popup>
    );
}

export default DocumentInfoPopup;