import { UserProduct } from "../User/UserProduct";
import { Invoice } from './../Invoice/Invoice';

export interface Promotion{
    serial:number,
    pourcent:boolean,
    fixed:boolean,
    amount:number,
    description:string,
    userProduct?: Array<UserProduct>
    invoice?:Array<Invoice>
}