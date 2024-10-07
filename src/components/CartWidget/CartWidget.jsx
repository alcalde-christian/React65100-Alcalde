import cartLogo from "./assets/cart.png"
import styles from "./CartWidget.module.css"
import { useCartContext } from "../../context/cartContext"

const CartWidget = () => {
    const { cart } = useCartContext()

    const cartTotalizer = () => {
        let cartTotal = 0
        cart.forEach(el => {
            cartTotal += el.qty
        });
        return cartTotal
    }

    return (
        <div className={styles.cartWidget}>
            <img className={styles.img} src={cartLogo} alt="Cart Widget" />
            <p className={styles.qty}>{cartTotalizer()}</p>
        </div>
    )
}

export default CartWidget