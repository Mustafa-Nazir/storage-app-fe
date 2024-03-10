"use client"
import { useState } from "react";
import DepartmentAddIcon from "../icons/departmentAddIcon";
import Popup from "./popup";
import DepartmentManagement from "./departmentManagement";

const DepartmentAdd = () => {
    const [isClicked , setIsClicked] = useState(false);
    return (
        <>
            <div onClick={()=>{setIsClicked(true)}} className="p-2 mx-1 cursor-pointer">
                <DepartmentAddIcon className="fill-main-dark w-8 h-8"/>
            </div>
            <Popup title="Yeni Departman Ekle" isClicked={isClicked} setIsClicked={setIsClicked}>
                <DepartmentManagement setIsClicked={setIsClicked}/>
            </Popup>
        </>
        
    );
}

export default DepartmentAdd;