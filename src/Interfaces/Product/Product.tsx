export interface Product {
    id?:number,
    name:string,
    file:string,
    price:string,
    userProducts?:Array<string>,
    productCategories?:Array<string>
}