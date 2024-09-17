import cart from "./assets/cart.png"
import styles from "./CartWidget.module.css"

const CartWidget = () => {
    return (
        <div className={styles.cartWidget}>
            <img className={styles.img} src={cart} alt="Cart Widget" />
            <p className={styles.qty}>0</p>
        </div>
    )
}

export default CartWidget