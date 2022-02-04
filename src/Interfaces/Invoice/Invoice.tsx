import { Promotion } from "../Promotion/Promotion";
import { User } from "../User/User";
import { InvoiceProduct } from './InvoiceProduct'

export interface Invoice{
    serial:string,
    user:User,
    promotion:Promotion,
    amount:number,
    createdAt:string,
    invoiceProduct?:Array<InvoiceProduct>
}