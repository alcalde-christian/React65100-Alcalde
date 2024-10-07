import { cartContext } from "./cartContext"
import { useState } from "react"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const isPhoneAlreadyAdded = cart.find (el => el.id === item.id)

        if (!isPhoneAlreadyAdded) {
            setCart([...cart, item])
        } else {
            setCart(cart.map(el =>
                el.id === item.id ? { ...el, qty: el.qty + item.qty } : el
            ));
        }
    }
 
    return(
        <cartContext.Provider value={{ cart, addToCart }}> 
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider