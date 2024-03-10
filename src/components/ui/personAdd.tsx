"use client"
import { useState } from "react";
import PersonAddIcon from "../icons/personAddIcon";
import Popup from "./popup";
import PersonAddManagement from "./personAddManagement";

const PersonAdd = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
            <div onClick={()=>{setIsClicked(true)}} className="p-2 mx-1 cursor-pointer">
                <PersonAddIcon className="fill-main-dark w-8 h-8" />
            </div>
            <Popup title="Kullanıcı Ekle" isClicked={isClicked} setIsClicked={setIsClicked}>
                <PersonAddManagement/>
            </Popup>
        </>

    );
}

export default PersonAdd;