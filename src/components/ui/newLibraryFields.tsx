import { useState } from "react";
import Input from "./input";
import Button from "./button";
import { useSelector } from "react-redux";
import IUserInfo from "@/models/user/IUserInfo";
import ILibrary from "@/models/library/ILibrary";
import LibraryService from "@/services/library/libraryService";
import { toast } from "react-toastify";

interface features {
    setIsClicked:Function,
    setLibraries:Function
}

const NewLibraryFields = (features:features) => {
    const userInfo:IUserInfo = useSelector((state:any) => state.userInfo);
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [size, setSize] = useState(0.25);

    const createLibrary = async () => {
        if (errorControl()) return;

        const data:ILibrary = {
            name:name,
            sizeGb:size,
            ownerId:userInfo._id
        }

        const result = await LibraryService.Add(data);
        features.setIsClicked(false);
        if(!result.success) return toast.error(result.message);

        data._id = result.data;
        features.setLibraries((prev:ILibrary[]) => [...prev,data]);
        return toast.success(result.message);
    }

    const errorControl = (): boolean => {
        const _nameError = name.length <= 0;
        setNameError(_nameError);

        const _idControl = userInfo._id == null;
        const emailControl = userInfo.email == null;

        return [_nameError,_idControl,emailControl].includes(true);
    }

    return (
        <div className="flex items-center justify-center my-5">
            <div className="w-[90%]">
                <Input
                    placeholder="Kütüphane ismi"
                    type="text"
                    value={name}
                    setValue={setName}
                    errorState={nameError}
                    errorMessage="Kütüphane isimi boş olamaz"
                />
                <Input
                    placeholder="Kütüphane boyutu"
                    type="text"
                    value={(size * 1000).toString() + "mb"}
                    setValue={setSize}
                    disabled={true}
                />
                <div className="flex justify-center">
                    <div className="w-[150px]">
                        <Button
                            name="Oluştur"
                            onClick={createLibrary}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewLibraryFields;