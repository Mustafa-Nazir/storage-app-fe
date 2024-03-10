import IResponseModel from "@/models/responseModels/IResponseModel";
import IUserWaitingList from "@/models/userWaitingList/IUserWaitingList";
import apiClient from "@/utilities/axios/customAxios";

export default class UserWaitingListService{
    private static baseUrl = "user/waitingList/";

    public static async AddUser(waitingList:IUserWaitingList):Promise<IResponseModel>{
        const url = this.baseUrl + "addUser";
        const data:IResponseModel = await apiClient.post(url,waitingList).then(res => res.data);
        return data
    }
}