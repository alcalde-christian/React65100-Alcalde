import styles from "./ItemCount.module.css"
import { useState } from "react"
import { useCartContext } from "../../context/cartContext"

const ItemCount = ({ initial, stock, item }) => {
    const [qty, setQty] = useState(initial)

    const { addToCart } = useCartContext()

    const increment = () => qty < stock ? setQty(qty + 1) : ""
    const decrement = () => qty > 1 ? setQty(qty - 1) : ""
    const onAdd = () => addToCart({...item, qty: qty})
    

    return (
        <div className={styles.counter}>
            <div className={styles.controls}>
                <button 
                    className={styles.button}
                    onClick={decrement}
                >
                    -
                </button>
                <p>
                    {qty}
                </p>
                <button 
                    className={styles.button}
                    onClick={increment}
                >
                    +
                </button>
            </div>
            <button 
                className={styles.addButton}
                onClick={onAdd}
                disabled={!stock}
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount