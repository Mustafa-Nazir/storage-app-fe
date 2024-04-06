import IFolder from "@/models/folder/IFolder";
import IDataResponseModel from "@/models/responseModels/IDataResponseModel";
import apiClient from "@/utilities/axios/customAxios";

export default class FolderService{

    private static baseUrl = "file/folder/";

    public static async Add(folder:IFolder):Promise<IDataResponseModel<string>>{
        const url = this.baseUrl + "add";
        const data:IDataResponseModel<string> = await apiClient.post(url,folder).then(res => res.data);
        return data;
    }

    public static async GetAllByCurrentFolderId(id:string):Promise<IDataResponseModel<IFolder[]>>{
        const url = `${this.baseUrl}getAllByCurrentFolderId/${id}`;
        const data:IDataResponseModel<IFolder[]> = await apiClient.get(url).then(res => res.data);
        return data;
    }

    public static async GetFolderNameById(id:string):Promise<IDataResponseModel<string>>{
        const url = `${this.baseUrl}getFolderNameById/${id}`;
        const data:IDataResponseModel<string> = await apiClient.get(url).then(res => res.data);
        return data;
    }
}