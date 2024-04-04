export default interface IUserLibraryDto{
    departments:{
        _id:string,
        name:string
    }[],
    role:{
        _id:string,
        name:string
    }
}