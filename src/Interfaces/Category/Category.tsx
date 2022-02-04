import { ProductCategory } from "../Product/ProductCategory";

export interface Category{
    name:string,
    createdAt:string,
    productCategory?:Array<ProductCategory>
}