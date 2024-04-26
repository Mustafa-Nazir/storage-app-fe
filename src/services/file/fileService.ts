import IFile from "@/models/file/IFile";
import IFileDto from "@/models/file/IFileDto";
import IDataResponseModel from "@/models/responseModels/IDataResponseModel";
import IResponseModel from "@/models/responseModels/IResponseModel";
import apiClient from "@/utilities/axios/customAxios";

export default class FileService{

    private static baseUrl = "file/fileManagement/";

    public static async Add(file:FormData):Promise<IDataResponseModel<IFileDto>>{
        const url = this.baseUrl + "add";
        const data:IDataResponseModel<IFileDto> = await apiClient.post(url,file).then(res => res.data);
        return data;
    }

    public static async GetAllByFolderIdDto(id:string):Promise<IDataResponseModel<IFileDto[]>>{
        const url = `${this.baseUrl}getAllByFolderIdDto/${id}`;
        const data:IDataResponseModel<IFileDto[]> = await apiClient.get(url).then(res => res.data);
        return data;
    }

    public static async DeleteUnencrypted(file:IFile):Promise<IResponseModel>{
        const url = this.baseUrl + "deleteUnencrypted";
        const data:IResponseModel = await apiClient.post(url,file).then(res => res.data);
        return data;
    }

    public static async DeleteEncrypted(file:IFile):Promise<IResponseModel>{
        const url = this.baseUrl + "deleteEncrypted";
        const data:IResponseModel = await apiClient.post(url,file).then(res => res.data);
        return data;
    }
}