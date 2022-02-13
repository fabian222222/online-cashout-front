export interface User {
    id: number,
    email: string,
    roles: object,
    product : Array<string>,
    password:string,
    confirmPassword?:string,
    username:string
}