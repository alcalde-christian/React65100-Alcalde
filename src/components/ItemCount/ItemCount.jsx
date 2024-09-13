import styles from "./ItemCount.module.css"
import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd }) => {
    const [qty, setQty] = useState(initial)

    const increment = () => qty < stock ? setQty(qty + 1) : ""
    const decrement = () => qty > 1 ? setQty(qty - 1) : ""

    return (
        <div className={styles.counter}>
            <div className={styles.controls}>
                <button 
                    className="button"
                    onClick={decrement}
                >
                    -
                </button>
                <p className="number">
                    {qty}
                </p>
                <button 
                    className="button"
                    onClick={increment}
                >
                    +
                </button>
            </div>
            <div>
                <button 
                    className="button"
                    onClick={() => onAdd(qty)}
                    disabled={!stock}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount