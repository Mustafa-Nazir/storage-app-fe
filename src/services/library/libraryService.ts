import ILibrary from "@/models/library/ILibrary";
import ILibraryInfoDto from "@/models/library/ILibraryInfoDto";
import ILibraryUsersDto from "@/models/library/ILibraryUsersDto";
import IUserLibraryDto from "@/models/library/IUserLibraryDto";
import IDataResponseModel from "@/models/responseModels/IDataResponseModel";
import IResponseModel from "@/models/responseModels/IResponseModel";
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

    public static async GetDepartmentsAndRolesByLibraryId(libraryId:string):Promise<IDataResponseModel<ILibrary>>{
        const url = `${this.baseUrl}getDepartmentsAndRoles/${libraryId}`;
        const data:IDataResponseModel<ILibrary> = await apiClient.get(url).then(res=>res.data);
        return data;
    }

    public static async AddDepartments(library:ILibrary):Promise<IResponseModel>{
        const url = this.baseUrl + "addDepartments";
        const data:IResponseModel = await apiClient.patch(url,library).then(res=>res.data);
        return data;
    }

    public static async UserControlByLibraryId(libraryId:string):Promise<IResponseModel>{
        const url = `${this.baseUrl}userControlByLibraryId/${libraryId}`;
        const data:IResponseModel = await apiClient.get(url).then(res=>res.data);
        return data;
    }

    public static async GetUserDepartmentAndRole(libraryId:string):Promise<IDataResponseModel<IUserLibraryDto>>{
        const url = `${this.baseUrl}getUserDepartmentAndRole/${libraryId}`;
        const data:IDataResponseModel<IUserLibraryDto> = await apiClient.get(url).then(res=>res.data);
        return data;
    }

    public static async GetLibraryUsersById(libraryId:string):Promise<IDataResponseModel<ILibraryUsersDto>>{
        const url = `${this.baseUrl}getLibraryUsersById/${libraryId}`;
        const data:IDataResponseModel<ILibraryUsersDto> = await apiClient.get(url).then(res=>res.data);
        return data;
    }

    public static async GetLibraryInfosById(libraryId:string):Promise<IDataResponseModel<ILibraryInfoDto>>{
        const url = `${this.baseUrl}getLibraryInfoById/${libraryId}`;
        const data:IDataResponseModel<ILibraryInfoDto> = await apiClient.get(url).then(res=>res.data);
        return data;
    }
}