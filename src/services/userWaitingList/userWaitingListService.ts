import IDataResponseModel from "@/models/responseModels/IDataResponseModel";
import IResponseModel from "@/models/responseModels/IResponseModel";
import IUserWaitingList from "@/models/userWaitingList/IUserWaitingList";
import IUserWaitingListDto from "@/models/userWaitingList/IUserWaitingListDto";
import apiClient from "@/utilities/axios/customAxios";

export default class UserWaitingListService{
    private static baseUrl = "user/waitingList/";

    public static async AddUser(waitingList:IUserWaitingList):Promise<IResponseModel>{
        const url = this.baseUrl + "addUser";
        const data:IResponseModel = await apiClient.post(url,waitingList).then(res => res.data);
        return data
    }

    public static async GetRequestDto():Promise<IDataResponseModel<IUserWaitingListDto[]>>{
        const url = this.baseUrl + "getRequestDto";
        const data:IDataResponseModel<IUserWaitingListDto[]> = await apiClient.get(url).then(res => res.data);
        return data
    }

    public static async AcceptRequest(userWaitingList:IUserWaitingList):Promise<IResponseModel>{
        const url = this.baseUrl + "acceptRequest";
        const data:IResponseModel = await apiClient.patch(url,userWaitingList).then(res => res.data);
        return data;
    }

    public static async RejectRequest(userWaitingList:IUserWaitingList):Promise<IResponseModel>{
        const url = this.baseUrl + "rejectRequest";
        const data:IResponseModel = await apiClient.post(url,userWaitingList).then(res => res.data);
        return data;
    }
}