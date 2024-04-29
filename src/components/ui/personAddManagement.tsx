import { useEffect, useState } from "react";
import Input from "./input";
import Button from "./button";
import Select from "./select";
import ILibrary from "@/models/library/ILibrary";
import LibraryService from "@/services/library/libraryService";
import RegexPatterns from "@/utilities/regex/regexPatterns";
import { toast } from "react-toastify";
import IUserWaitingList from "@/models/userWaitingList/IUserWaitingList";
import UserWaitingListService from "@/services/userWaitingList/userWaitingListService";
import Roles from "@/utilities/constants/roles";

const PersonAddManagement = () => {
    const [email , setEmail] = useState("");
    const [emailError , setEmailError] = useState(false);
    const [department , setDepartment] = useState("");
    const [role , setRole] = useState("");
    const [library , setLibrary] = useState({} as ILibrary);

    useEffect(()=>{
        getDepartmentsAndRoles();
    },[])

    const getDepartmentsAndRoles = async () => {
        const result = await LibraryService.GetDepartmentsAndRolesByLibraryId(getLibraryId());
        setLibrary(result.data as ILibrary);
    }

    const getLibraryId = (): string => {
        const id = window.location.pathname.split("/")[3];
        return id;
    }

    const sendInvitation = async () => {
        if(inputControl())return toast.error("Lütfen geçerli alanları doldurun");
        const userWaitingList = getDataForWaitingList();
        
        const result = await UserWaitingListService.AddUser(userWaitingList);
        if(!result.success) return toast.error(result.message);
        return toast.success(result.message);
    }

    const inputControl = () => {
        const emailControl = !RegexPatterns.testInput(email,RegexPatterns.email);
        setEmailError(emailControl);

        const departmentControl = department.length == 0;
        const roleControl = role.length == 0;

        return [emailControl , departmentControl , roleControl].includes(true);
    }

    const getDataForWaitingList = ():IUserWaitingList =>{
        const departmentId = library.departments?.find(d => d.name == department)?._id;
        const roleId = library.roles?.find(r => r.name == role)?._id;
        const data = {
            departmentId:departmentId,
            roleId:roleId,
            email:email,
            libraryId:getLibraryId()
        } as IUserWaitingList

        return data;
    }

    return (
        <div className="mt-5 flex flex-col items-center">
            <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 w-full">
                <div className="px-2">
                    <div className="text-center mb-2">Kullanıcı e-mail</div>
                    <Input placeholder="" setValue={setEmail} type="text" value={email} errorState={emailError} errorMessage="Geçerli bir email adresi girin"/>
                </div>
                <div className="px-2">
                    <div className="text-center mb-2">Departman</div>
                    <Select setValue={setDepartment} value={department}>
                        {library.departments?.map((dep,index)=>{
                            return <option key={index}>{dep.name}</option>
                        })}
                    </Select>
                </div>
                <div className="px-2">
                    <div className="text-center mb-2">Rol</div>
                    <Select setValue={setRole} value={role}>
                        {library.roles?.filter(r => r.name != Roles.owner).map((role,index) => {
                            return <option key={index}>{role.name}</option>
                        })}
                    </Select>
                </div>
            </div>
            <div className="w-[150px]"><Button name="İstek Gönder" onClick={sendInvitation}/></div>
        </div>
    );
}

export default PersonAddManagement;