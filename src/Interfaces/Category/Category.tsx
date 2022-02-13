import { ProductCategory } from "../Product/ProductCategory";

export interface Category{
    id:number,
    name:string,
    createdAt:string,
    productCategory?:Array<string>
}