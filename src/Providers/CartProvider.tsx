import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

export const  CartProvider = (props:any) => {

    const [cart, setCart] = useState([])
    const [cartSize, setCartSize] = useState(0)

    useEffect(() => {
        console.log(cart);
    }, [cart])
    

    return (
        <CartContext.Provider value={{cart, setCart, cartSize, setCartSize}}>
            {props.children}
        </CartContext.Provider>
    )
}