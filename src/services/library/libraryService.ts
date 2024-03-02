import ILibrary from "@/models/library/ILibrary";
import IDataResponseModel from "@/models/responseModels/IDataResponseModel";
import apiClient from "@/utilities/axios/customAxios";

export default class LibraryService{

    private static baseUrl = "user/library/";

    public static async Add(library:ILibrary):Promise<IDataResponseModel<string>>{
        const url = this.baseUrl + "add";
        const data:IDataResponseModel<string> = await apiClient.post(url,library).then(res => res.data);
        return data;
    }

    public static async GetAll():Promise<IDataResponseModel<ILibrary[]>>{
        const url = this.baseUrl + "getAll";
        const data:IDataResponseModel<ILibrary[]> = await apiClient.get(url).then(res => res.data);
        return data;
    }
}