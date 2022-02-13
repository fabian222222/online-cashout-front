import React, {useContext, useEffect} from 'react'
import SingleCart from '../../Components/Cart/SingleCart'
import { Product } from '../../Interfaces/Product/Product';
import { CartContext } from '../../Providers/CartProvider';
import { UserContext } from '../../Providers/UserProvider';
import { getUserProducts } from '../../Services/UserProduct/getUserProducts'; 


const ListCart = () => {

    const { cart, useCart } = useContext(CartContext)
    const {user} = useContext(UserContext)

    const GetProducts = ( async () => {
        const products = await getUserProducts(user.id)
        console.log(products);
    })

    useEffect(() => {
        if (user){
            GetProducts()
        }
    }, [user])

    return (
        <div>
            {cart.map((product:Product) => {
                <SingleCart key={product.id} ></SingleCart>
            })}
        </div>
    )
}

export default ListCart