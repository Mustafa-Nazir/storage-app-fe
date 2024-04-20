import { useState } from "react";
import DocumentIcon from "../icons/documentIcon";
import DocumentInfoPopup from "./documentInfoPopup";

interface features {
    name: string,
}
const Document = (features: features) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
            <div onClick={() => { setIsClicked(true) }} className="flex flex-col items-center cursor-pointer hover:bg-gray-100 w-[100px] border-b-2 border-transparent hover:border-main-dark rounded-t-md hover:shadow-md">
                <DocumentIcon className="w-14 h-14 fill-gray-500" />
                <div className="text-center">{features.name}</div>
            </div>
            <DocumentInfoPopup isClicked={isClicked} setIsClicked={setIsClicked}/>
        </>

    );
}

export default Document;