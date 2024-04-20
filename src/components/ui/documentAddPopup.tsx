import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import Popup from "./popup";
import Input from "./input";
import Button from "./button";

interface features {
    isClicked: boolean,
    setIsClicked: Function,
    setFiles: Function
}
const DocumentAddPopup = (features: features) => {
    const [file, setFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState(false);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const params = useParams();
    const libraryId = params.libraryId as string;
    const folderId = params.folderId as string;

    const inputControl = () => {
        const nameStatus = name.length <= 0;
        setNameError(nameStatus);

        const inputFileStatus = file == null;
        setFileError(inputFileStatus);
        return nameStatus || inputFileStatus;
    }

    const fileInputHandleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (event:any) => {
        const selectedFile = event.target.files ? event.target.files[0] : null;
        setFile(selectedFile);
        setFileError(selectedFile == null);
    }

    const addDocument = () => {
        if(inputControl()) return;
    }
    return (
        <Popup title="Belge Ekle" isClicked={features.isClicked} setIsClicked={features.setIsClicked}>
            <div className="flex flex-col items-center pt-4">
                <div className="w-full">
                    <Input placeholder="Belge İsmi" value={name} setValue={setName} type="text" errorMessage="Belge ismi boş olamaz" errorState={nameError} />
                    <Input placeholder="Şifre" value={password} setValue={setPassword} type="password" />
                    <div className="flex items-center">
                        <div className="w-[150px]">
                            <input ref={fileInputRef} className="hidden" type="file" onChange={handleFileChange}/>
                            <Button name="Dosya Seç" onClick={fileInputHandleClick} />
                        </div>
                        <div className={`${fileError && "text-red-500"} ml-5`}>{fileError ? "Belge yüklemek zorunludur, lütfen devam etmeden önce bir dosya seçin." : file?.name}</div>
                    </div>
                </div>
                <div className="mt-3 w-[180px]">
                    <Button name="Yükle" onClick={addDocument} />
                </div>
            </div>
        </Popup>
    );
}

export default DocumentAddPopup;