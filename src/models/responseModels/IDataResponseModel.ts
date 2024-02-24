import IResponseModel from "./IResponseModel";

export default interface IDataResponseModel<T> extends IResponseModel{
    data?:T;
}