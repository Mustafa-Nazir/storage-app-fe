export interface IAnnouncement {
    _id?:string,
    categoryId:string,
    title:string,
    content:string,
    email:string,
    date:string,
    status?:boolean
}