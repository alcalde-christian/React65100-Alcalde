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

    const removeFromCart = (id) => {
        setCart(cart.filter(el => el.id !== id));
    };
 
    return(
        <cartContext.Provider value={{ cart, addToCart, removeFromCart }}> 
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider