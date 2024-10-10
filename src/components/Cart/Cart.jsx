import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import  styles  from "./Cart.module.css"

const Cart = () => {
    const { cart, removeFromCart } = useCartContext()
    let totalPrice = 0

    cart.forEach(el => {
        totalPrice += el.price * el.qty
    });

    return(
        <>
            <div>
                {cart.length == 0 ? (
                    <p className={styles.emptyCart}>
                        No tienes elementos en el carrito
                    </p>
                ) : (
                    <>
                        <div className={styles.cartItemContainer}>
                            {cart.map(el => (
                                <div key={el.id} className={styles.cartItem}>
                                    <p className={styles.item}>
                                        {el.qty} x {el.name}
                                    </p>
                                    <p className={styles.itemPrice}>
                                        $ {el.price * el.qty}
                                    </p>
                                    <button 
                                        className={styles.deleteButton}
                                        onClick={() => removeFromCart(el.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            ))}
                        </div>
                        <p className={styles.cartTotal}>
                            Total de la compra: ${totalPrice}
                        </p>
                    </>
                ) 
                }
            </div>
            <div className={styles.buttonsContainer}>
                <Link 
                    className={styles.button} 
                    to="/"
                >
                    Volver
                </Link>
                <Link 
                    className={`${styles.button} ${styles.checkoutButton} ${cart.length === 0 ? styles.disabled : ""}`}
                    to="/checkout"
                >
                    Finalizar compra
                </Link>
            </div>
        </>
    )
}

export default Cart