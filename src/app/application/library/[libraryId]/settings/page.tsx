"use client"
import Container from "@/components/ui/container";
import DepartmentAdd from "@/components/ui/departmentAdd";
import PersonAdd from "@/components/ui/personAdd";
import { changePageName } from "@/utilities/redux/slices/pageNameSlice";
import store from "@/utilities/redux/store";
import { useEffect } from "react";

export default function Settings() {
    useEffect(()=>{
        store.dispatch(changePageName("Ayarlar"));
    },[])
    return (
        <Container>
            <div className="flex justify-between items-center px-3">
                <div className="text-xl">Kütüphane Adı:</div>
                <div className="flex">
                    <PersonAdd/>
                    <DepartmentAdd/>
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
                            <td className="px-6 py-4">Ad</td>
                            <td className="px-6 py-4">Soyad</td>
                            <td className="px-6 py-4">Email</td>
                            <td className="px-6 py-4">Departman</td>
                            <td className="px-6 py-4">Rol</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    );
}