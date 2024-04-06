"use client"
import Container from "@/components/ui/container";
import DepartmentAdd from "@/components/ui/departmentAdd";
import PersonAdd from "@/components/ui/personAdd";
import ILibrary from "@/models/library/ILibrary";
import ILibraryInfoDto from "@/models/library/ILibraryInfoDto";
import ILibraryUsersDto from "@/models/library/ILibraryUsersDto";
import LibraryService from "@/services/library/libraryService";
import { changePageName } from "@/utilities/redux/slices/pageNameSlice";
import store from "@/utilities/redux/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Settings() {
    const [libraryUsers, setLibraryUsers] = useState({} as ILibraryUsersDto);
    const [departmentsAndRoles , setDepartmentsAndRoles] = useState({} as ILibrary);
    const libraryInfo: ILibraryInfoDto = useSelector((state: any) => state.libraryInfo);
    const params = useParams();
    const libraryId = params.libraryId as string;

    useEffect(() => {
        store.dispatch(changePageName("Ayarlar"));
        getLibraryUsers();
        getDepartmentsAndRoles();
    }, [])

    const getLibraryUsers = async () => {
        const result = await LibraryService.GetLibraryUsersById(libraryId);
        const data = result.data as ILibraryUsersDto;
        setLibraryUsers(data);
    }

    const getDepartmentsAndRoles = async () => {
        const result = await LibraryService.GetDepartmentsAndRolesByLibraryId(libraryId);
        setDepartmentsAndRoles(result.data as ILibrary);
    }

    const getDepertmentName = (departmentId: string) => {
        const department = departmentsAndRoles.departments?.find(d => d._id == departmentId);
        if(department) return department.name
        return "-";
    };

    const getRoleName = (roleId: string) => {
        const role = departmentsAndRoles.roles?.find(r => r._id == roleId);
        if(role) return role.name;
        return "-";
    }
    return (
        <Container>
            <div className="flex justify-between items-center px-3">
                <div className="text-xl"><span className="font-bold">Kütüphane Adı:</span> {libraryInfo.name}</div>
                <div className="flex">
                    <PersonAdd />
                    <DepartmentAdd />
                </div>
            </div>
            <div className="bg-gray-300 w-full h-[1px] mt-1"></div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Ad</th>
                            <th className="px-6 py-3">Soyad</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Departman</th>
                            <th className="px-6 py-3">Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b text-center">
                            <td className="px-6 py-4">{libraryInfo.ownerId?.name}</td>
                            <td className="px-6 py-4">{libraryInfo.ownerId?.surname}</td>
                            <td className="px-6 py-4">{libraryInfo.ownerId?.email}</td>
                            <td className="px-6 py-4">-</td>
                            <td className="px-6 py-4">owner</td>
                        </tr>
                        {
                            libraryUsers.users?.map((user, index) => {
                                return (
                                    <tr key={index} className="bg-white border-b text-center">
                                        <td className="px-6 py-4">{user.userId.name}</td>
                                        <td className="px-6 py-4">{user.userId.surname}</td>
                                        <td className="px-6 py-4">{user.userId.email}</td>
                                        <td className="px-6 py-4">{getDepertmentName(user.departmentId)}</td>
                                        <td className="px-6 py-4">{getRoleName(user.roleId)}</td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>
        </Container>
    );
}