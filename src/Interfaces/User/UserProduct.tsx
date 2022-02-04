import {User} from './User'
import {Product} from './../Product/Product'
import {Promotion} from './../Promotion/Promotion'

export interface UserProduct {
    user: User,
    product: Product,
    createdAt : string,
    promotion:Promotion
}