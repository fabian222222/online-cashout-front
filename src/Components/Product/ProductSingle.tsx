import React from 'react'
import { Product } from '../../Interfaces/Product/Product'
import { CartContext } from '../../Providers/CartProvider';
import { UserContext } from '../../Providers/UserProvider';
import { useContext } from 'react';
import { createUserProduct } from '../../Services/UserProduct/createUserProduct';

const ProductSingle = (props:Product) => {

    const { setCart, cart } = useContext(CartContext)
    const { user } = useContext(UserContext)

    const addToCart = ((Product : number) => {

        const today = new Date()
        const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

        const userId = user.id

        setCart([...cart, {User:userId, Product:Product, isChecked:false, Promotion:null, createdAt:date}])

    })

    const addToDb = ( async (Product:number) => {

        const today = new Date()
        const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
        const userId = user.id
        const UserProduct = await createUserProduct(userId, Product, false, null, date )
        console.log(UserProduct);
        
    })

    if (props.file === undefined ){
        return (
            <div>
                <div>
                    {props.name}
                </div> 
                <div>
                    {props.price}
                </div>              
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    {props.name}
                </div> 
                <div>
                    {props.price}
                </div>              
                <img src={`http://127.0.0.1:8000/image/${props.file}`} alt="" />
                <button onClick={
                    (() => {
                        addToDb(props.id)
                        addToCart(props.id)
                    })
                }>Acheter</button>
            </div>
        )
    }   
}

export default ProductSingle