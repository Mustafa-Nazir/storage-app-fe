export default interface ILibraryUsersDto{
    users: {
        userId: {
            _id: string,
            name: string,
            surname: string,
            email: string,
        },
        roleId: string,
        departmentId: string
    }[]
}