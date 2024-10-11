import { cartContext } from "./cartContext"
import { useState } from "react"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // Función para agregar productos al carrito
    const addToCart = (item) => {
        const isPhoneAlreadyAdded = cart.find (el => el.id === item.id)

        if (!isPhoneAlreadyAdded) {
            setCart([...cart, item])
        } else {
            setCart(cart.map(el =>
                el.id === item.id ? { ...el, qty: el.qty + item.qty } : el
            ))
        }
    }

    // Función para eliminar productos del carrito
    const removeFromCart = (id) => {
        setCart(cart.filter(el => el.id !== id))
    }

    // Función para calcular el costo total de los elementos del carrito
    const calculateTotal = () => {
        let totalPrice = 0

        cart.forEach(el => {
            totalPrice += el.price * el.qty
        })

        return totalPrice
    }

    // Función para vaciar el carrito
    const emptyCart = () => {
        setCart([])
    }

    // Función para calcular el total de elementos en el carrito
    const cartTotalizer = () => {
        let cartTotal = 0
        cart.forEach(el => {
            cartTotal += el.qty
        });
        return cartTotal
    }
 
    return(
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal, emptyCart, cartTotalizer }}> 
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider