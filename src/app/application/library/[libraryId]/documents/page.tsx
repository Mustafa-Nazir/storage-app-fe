"use client"
import Container from "@/components/ui/container";
import Folder from "@/components/ui/folder";
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import { changePageName } from "@/utilities/redux/slices/pageNameSlice";
import store from "@/utilities/redux/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Documents() {
    const userLibraryInfo: IUserLibraryDto = useSelector((state: any) => state.userLibraryInfo);
    const params = useParams();
    const libraryId = params.libraryId as string;
    useEffect(() => {
        store.dispatch(changePageName("Belgeler"));
    }, [])

    return (
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-y-4 justify-items-center mt-4">
                <Folder folderId={libraryId} name="Genel" />
                {userLibraryInfo.departments?.map((department, index) => {
                    return (
                        <Folder key={department._id} folderId={department._id} name={department.name} />
                    );
                })}
            </div>
        </Container>
    );
}