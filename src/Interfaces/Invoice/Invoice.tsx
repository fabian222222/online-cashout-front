import { User } from "../User/User";

export interface Invoice{
    serial:string,
    user:User,
    promotion:string,
    amount:number,
    createdAt:string,
    invoiceProduct?:Array<string>
}