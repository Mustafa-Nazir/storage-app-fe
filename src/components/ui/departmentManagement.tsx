"use client"
import ILibrary from "@/models/library/ILibrary";
import LibraryService from "@/services/library/libraryService";
import { useEffect, useState } from "react";
import DynamicInput from "./dynamicInput";
import Button from "./button";
import { toast } from "react-toastify";
import store from "@/utilities/redux/store";
import { addUserLibraryInfo } from "@/utilities/redux/slices/userLibraryInfoSlice";

interface features{
    setIsClicked:Function
}

const DepartmentManagement = (features:features) => {
    const [departments, setDepartments] = useState([] as ILibrary["departments"]);
    const [inputs , setInputs] = useState([] as any[]);
    const [inputValues , setInputValues] = useState({} as any);
    const [index , setIndex] = useState(0);

    useEffect(() => {
        getDepartments();
    }, [])

    const getDepartments = async () => {
        const result = await LibraryService.GetDepartmentsAndRolesByLibraryId(getLibraryId());
        setDepartments(result.data?.departments);
    }

    const getLibraryId = (): string => {
        const id = window.location.pathname.split("/")[3];
        return id;
    }

    const addInput = () => {
        const _input = {
            index:index,
            component:<DynamicInput  setInputs={setInputs} setInputValues={setInputValues} index={index.toString()}/>
        }
        setInputs((prev:any) => [...prev , _input])
        setIndex(index+1);
    }

    const saveDepartments = async () => {
        const _departments = Object.keys(inputValues).map(key =>{ return {name:inputValues[key]}})
        if(!departmentsControl(_departments)) return toast.error("Departman isimleri aynı veya boş olamaz")
        const _library:ILibrary = {
            _id:getLibraryId(),
            departments:_departments
        } as ILibrary

        const result = await LibraryService.AddDepartments(_library);
        if(!result.success) return toast.error(result.message);

        await updateDepartments();
        features.setIsClicked(false);
        return toast.success(result.message);
    }

    const updateDepartments = async () => {
        const result = await LibraryService.GetUserDepartmentAndRole(getLibraryId());
        store.dispatch(addUserLibraryInfo(result.data));
    };

    const departmentsControl = (_departments:ILibrary["departments"]):boolean => {
        const lengthControl = _departments?.some(dep => dep.name.length <= 0);
        const sameDepartmentControl = _departments?.some(dep => departments?.some(d => d.name == dep.name));
        const uniqueControl = _departments?.some(dep => {
            const countList:any = _departments?.map(d => d.name == dep.name ? 1 : 0);
            const sum = countList?.reduce((a:any,c:any) => {return a+c},0)
            return sum >=2;
        })

        return !([lengthControl , sameDepartmentControl , uniqueControl].includes(true));
    }

    return (
        <div>
            <div className="h-96 w-full overflow-y-auto">
                <div className="grid grid-cols-2 mt-3 justify-items-center">
                    <div className="w-[80%]">
                        <div className="text-center text-sm mb-3 font-bold">Mevcut Departmanlar</div>
                        <table className="w-full text-sm">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr><th className="px-6 py-3">Departman Adı</th></tr>
                            </thead>
                            <tbody>
                                {departments?.map((dep, index) => {
                                    return (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50 border-b text-center"><td className="px-6 py-4">{dep.name}</td></tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-[80%]">
                        <div className="text-center text-sm mb-3 font-bold">Departman Ekle</div>
                        <div>
                            {inputs.map((input)=>{
                                return (<div key={input.index}>{input.component}</div>);
                            })}
                        </div>
                        <div className="flex justify-around">
                            <div onClick={addInput} className="flex justify-center items-center bg-main-dark hover:bg-main-light text-xl w-12 h-12 rounded-full text-white cursor-pointer select-none">+</div>
                            {inputs.length > 0 &&  <div className="w-1/2"><Button name="Kaydet" onClick={(saveDepartments)}/></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DepartmentManagement;