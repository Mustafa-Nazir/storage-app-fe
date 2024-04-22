export default interface IFile{
    _id?:string,
    name:string,
    email:string,
    url?:string,
    folderId:string,
    libraryId:string,
    departmentId:string,
    date?:Date,
    password:string
}