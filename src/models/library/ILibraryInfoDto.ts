export default interface ILibraryInfoDto{
    _id:string,
    name:string,
    ownerId:{
        _id:string,
        name:string,
        surname:string,
        email:string
    }
    sizeGb:number,
}