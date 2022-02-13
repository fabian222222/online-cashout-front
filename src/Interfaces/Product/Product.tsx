export interface Product {
    id?:number,
    name:string,
    file?:string,
    filePath?:string,
    price:string,
    categories?:Array<string>,
    userProducts?:Array<string>,
    productCategories?:Array<string>
}