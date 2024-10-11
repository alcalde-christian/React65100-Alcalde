import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import styles from "./ItemCount.module.css"

const ItemCount = ({ initial, stock, item }) => {
    const [qty, setQty] = useState(initial)

    const { addToCart } = useCartContext()

    const navigate = useNavigate()

    const increment = () => qty < stock ? setQty(qty + 1) : ""
    const decrement = () => qty > 1 ? setQty(qty - 1) : ""
    const onAdd = () => {
        addToCart({...item, qty: qty})

        Swal.fire({
            toast: true,
            position: "bottom-start",
            title: `Se agrego ${item.name} al carrito`,
            showConfirmButton: true,
            confirmButtonText: "Ver carrito",
            timer: 3000,
            background: "#121212",
            customClass: {
                title: "swalTitle",
                confirmButton: "swalConfirmButton"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/cart");
            }
        });
    } 

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