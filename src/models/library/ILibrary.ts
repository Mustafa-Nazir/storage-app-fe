export default interface ILibrary{
    _id?:string,
    name:string,
    ownerId:string,
    sizeGb:number,
    roles?:{
        _id?:string,
        name:string
    }[],
    departments?:{
        _id?:string,
        name:string
    }[]
}