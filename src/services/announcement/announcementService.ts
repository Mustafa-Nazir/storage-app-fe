import { IAnnouncement } from "@/models/announcement/IAnnouncement";
import IDataResponseModel from "@/models/responseModels/IDataResponseModel";
import IResponseModel from "@/models/responseModels/IResponseModel";
import apiClient from "@/utilities/axios/customAxios";

export default class AnnouncementService{
    private static baseUrl = "file/announcement/";

    public static async GetAllByCategoryId(categoryId:string):Promise<IDataResponseModel<IAnnouncement[]>>{
        const url = `${this.baseUrl}getAllByCategoryId/${categoryId}`;
        const data:IDataResponseModel<IAnnouncement[]> = await apiClient.get(url).then(res => res.data);
        return data;
    }

    public static async Add(announcement:IAnnouncement):Promise<IDataResponseModel<string>>{
        const url = this.baseUrl + "add";
        const data:IDataResponseModel<string> = await apiClient.post(url,announcement).then(res => res.data);
        return data;
    }

    public static async DeleteById(id:string):Promise<IResponseModel>{
        const url = `${this.baseUrl}delete/${id}`;
        const data:IResponseModel = await apiClient.delete(url).then(res => res.data);
        return data;
    }
}