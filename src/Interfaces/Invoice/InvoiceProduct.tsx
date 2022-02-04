import { Invoice } from "./Invoice";

export interface InvoiceProduct{
    name:string,
    quantity:number,
    price:number,
    invoice:Invoice
}