import ILibrary from "../library/ILibrary";

export default interface IUserWaitingListDto{
    _id?:string,
    email:string,
    libraryId:ILibrary,
    roleId:string,
    departmentId:string
}