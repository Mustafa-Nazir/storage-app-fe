import IAccessToken from "@/models/auth/IAccessToken";
import IUserForLogin from "@/models/auth/IUserForLogin";
import IUserForRegister from "@/models/auth/IUserForRegister";
import IDataResponseModel from "@/models/responseModels/IDataResponseModel";
import IResponseModel from "@/models/responseModels/IResponseModel";
import apiClient from "@/utilities/axios/customAxios";

export default class AuthService {

    private static baseUrl = "user/auth/";

    public static async Login(userData:IUserForLogin):Promise<IDataResponseModel<IAccessToken>>{
        const url = this.baseUrl + "login";
        const data:IDataResponseModel<IAccessToken> = await apiClient.post(url,userData).then(res=>res.data);
        return data;
    }

    public static async Register(registerData:IUserForRegister):Promise<IResponseModel>{
        const url = this.baseUrl + "register";
        const data:IResponseModel = await apiClient.post(url,registerData).then(res=>res.data);
        return data;
    }
}