import FileService from "@/services/file/fileService";
import { setLibraryTotalSize } from "@/utilities/redux/slices/libraryTotalSizeSlice";
import store from "@/utilities/redux/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LibrarySizeBar = () => {
    const libraryTotalSize: number = useSelector((state: any) => state.libraryTotalSize.size);
    const params = useParams();
    const libraryId = params.libraryId as string;

    useEffect(()=>{
        getSize();
    },[]);

    const getSize = async () => {
        const result = await FileService.GetTotalSizeByLibraryId(libraryId);
        store.dispatch(setLibraryTotalSize(result.data as number))
    }

    const byteToMb = (byte:number) => {
        return byte / (1024*1024);
    }

    const getMB = () => {
        return Number(byteToMb(libraryTotalSize).toFixed(3));
    }
    const getPercent = () => {
        const librarySize = 250;
        const percent = (100 * getMB()) / librarySize ;
        return percent.toFixed(2);
    }

    const widthStyle = {
        width: `${getPercent()}%`
    }
    return (
        <div className="w-full px-3">
            <div className="w-full h-3 bg-main rounded-full overflow-hidden border">
                <div style={widthStyle} className="h-full bg-main-dark"></div>
            </div>
            <div className="flex justify-between text-gray-500 text-xs px-1 mt-1">
                <div>{`${getMB()} MB`}</div>
                <div>250 MB</div>
            </div>
        </div>
    );
}

export default LibrarySizeBar;