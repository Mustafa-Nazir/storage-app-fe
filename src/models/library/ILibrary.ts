export default interface ILibrary{
    _id?:string,
    name:string,
    ownerId:string,
    sizeGb:number,
    roles?:{
        name:string
    }[],
    departments?:{
        name:string
    }[]
}