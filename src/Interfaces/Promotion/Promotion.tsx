export interface Promotion{
    serial:string,
    pourcent:boolean,
    fixed:boolean,
    amount:number,
    description:string,
    userProduct?: Array<string>
    invoice?:Array<string>
}