import { useEffect, useState } from "react";
import Notification from "./notification"
import IUserWaitingList from "@/models/userWaitingList/IUserWaitingList";
import UserWaitingListService from "@/services/userWaitingList/userWaitingListService";
import IUserWaitingListDto from "@/models/userWaitingList/IUserWaitingListDto";
import CircleDoneIcon from "../icons/circleDoneIcon";
import CircleCancelIcon from "../icons/circleCancelIcon";
import { toast } from "react-toastify";

const NotificationManagement = () => {
    const [libraryRequest, setLibraryRequest] = useState([] as IUserWaitingListDto[]);

    useEffect(() => {
        getLibraryRequest();
    }, []);

    const getLibraryRequest = async () => {
        const result = await UserWaitingListService.GetRequestDto();
        setLibraryRequest(result.data as IUserWaitingListDto[]);
    }

    const acceptRequest = async (id:string) => {
        const data = getData(id);
        const result = await UserWaitingListService.AcceptRequest(data);
        if(!result.success) return toast.error(result.message);
        setLibraryRequest(prev => prev.filter(p => p._id != id));
    }

    const rejectRequest = async (id:string) => {
        const data = getData(id);
        const result = await UserWaitingListService.RejectRequest(data);
        if(!result.success) return toast.error(result.message);
        setLibraryRequest(prev => prev.filter(p => p._id != id));
    }

    const getData = (id:string):IUserWaitingList => {
        const request = libraryRequest.find(l => l._id == id);
        const data = {
            _id:request?._id,
            email:request?.email,
            departmentId:request?.departmentId,
            roleId:request?.roleId,
            libraryId:request?.libraryId._id
        } as IUserWaitingList;

        return data;
    }

    return (
        <Notification status={libraryRequest.length > 0}>
            {libraryRequest.map((lr,index)=>{
                return (
                    <div key={index} className="flex">
                        <div><span className="font-bold">{lr.libraryId.name}</span> kütüphanesi için davet isteği</div>
                        <div className="flex ml-2">
                            <div onClick={()=>{acceptRequest(lr._id as string)}} className="cursor-pointer"><CircleDoneIcon className="fill-green-500 hover:fill-green-400"/></div>
                            <div onClick={()=>{rejectRequest(lr._id as string)}} className="cursor-pointer"><CircleCancelIcon className="fill-red-500 hover:fill-red-400"/></div>
                        </div>
                    </div>
                )
            })}
        </Notification>
    )
}

export default NotificationManagement;