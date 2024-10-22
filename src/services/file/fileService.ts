import IFile from "@/models/file/IFile";
import IFileDateDto from "@/models/file/IFileDateDto";
import IFileDepartmentDto from "@/models/file/IFileDepartmentDto";
import IFileDto from "@/models/file/IFileDto";
import IFileEmailDto from "@/models/file/IFileEmailDto";
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

    public static async DownloadEncryptedFile(file:IFile):Promise<IDataResponseModel<string>>{
        const url = this.baseUrl + "downloadEncryptedFile";
        const data:IDataResponseModel<string> = await apiClient.post(url,file).then(res => res.data);
        return data;
    }

    public static async GetTotalSizeByLibraryId(id:string):Promise<IDataResponseModel<number>>{
        const url = `${this.baseUrl}getTotalSizeByLibraryId/${id}`;
        const data:IDataResponseModel<number> = await apiClient.get(url).then(res => res.data);
        return data;
    }

    public static async GetTotalSizeAccordingToEmail(libraryId:string):Promise<IDataResponseModel<IFileEmailDto[]>>{
        const url = `${this.baseUrl}getTotalSizeAccordingToEmail/${libraryId}`;
        const data:IDataResponseModel<IFileEmailDto[]> = await apiClient.get(url).then(res => res.data);
        return data;
    }

    public static async GetTotalSizeAccordingToDepartment(libraryId:string):Promise<IDataResponseModel<IFileDepartmentDto[]>>{
        const url = `${this.baseUrl}getTotalSizeAccordingToDepartment/${libraryId}`;
        const data:IDataResponseModel<IFileDepartmentDto[]> = await apiClient.get(url).then(res => res.data);
        return data;
    }

    public static async GetAmountAccordingToDate(libraryId:string):Promise<IDataResponseModel<IFileDateDto[]>>{
        const url = `${this.baseUrl}getAmountAccordingToDate/${libraryId}`;
        const data:IDataResponseModel<IFileDateDto[]> = await apiClient.get(url).then(res => res.data);
        return data;
    }
}