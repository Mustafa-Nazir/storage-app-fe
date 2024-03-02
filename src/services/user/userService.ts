import IDataResponseModel from "@/models/responseModels/IDataResponseModel";
import IUserInfo from "@/models/user/IUserInfo";
import apiClient from "@/utilities/axios/customAxios";

export default class UserService{
    private static baseUrl = "user/";

    public static async GetUserInfo(){
        const url = this.baseUrl + "getUserInfo";
        const data:IDataResponseModel<IUserInfo> = await apiClient.get(url).then(res => res.data);
        return data; 
    }
}