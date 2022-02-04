import { UserProduct } from "../User/UserProduct"
import {ProductCategory} from './ProductCategory'

export interface Product {
    id:number,
    name:string,
    file:string,
    filePath:string,
    price:number,
    userProducts:Array<UserProduct>,
    productCategories:Array<ProductCategory>
}