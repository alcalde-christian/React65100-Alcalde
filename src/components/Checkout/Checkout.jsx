import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import { createOrder } from "../../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import styles from "./Checkout.module.css"

const Checkout = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")

    const { cart, calculateTotal, emptyCart } = useCartContext()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const order = {
            buyer: { name, mail, phone },
            items: cart,
            date: serverTimestamp(),
            total: calculateTotal()
        }

        const orderId = await createOrder(order)

        Swal.fire({
            title: "¡Muchas gracias!",
            text: `Su compra ha sido registrada bajo el código ${orderId}`,
            icon: "success",
            background: "#121212",
            customClass: {
                title: "swalTitle",
                content: "swalText",
                confirmButton: "swalConfirmButton"
            }
          }) .then (() => {
              navigate("/")
              emptyCart()
          })
    }

    return(
        <div className={styles.checkoutContainer}>
            <div className={styles.purchaseSummary}>
                <h2 className={styles.title}>
                    Resumen:
                </h2>
                <div className={styles.summaryItemContainer}>
                    {cart.map(el => (
                        <p key={el.id} className={styles.item}>
                            {el.qty} x {el.name}
                        </p>
                    ))}
                </div>
                <p className={styles.totalPrice}>
                    Total: $ {calculateTotal()}
                </p>
            </div>
            <div className={styles.customerInfo}>
                <h2 className={styles.title}>
                    Datos del comprador:
                </h2>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="checkoutName">
                        Nombre completo
                    </label>
                    <input 
                        type="text" 
                        name="checkoutName" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="checkoutMail">
                        Correo electrónico
                    </label>
                    <input 
                        type="email" 
                        name="checkoutMail"
                        value={mail}
                        onChange={e => setMail(e.target.value)} 
                        required
                    />

                    <label htmlFor="checkoutPhone">
                        Teléfono
                    </label>
                    <input 
                        type="text" 
                        name="checkoutPhone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)} 
                        required
                    />
                    <button type="submit" className={styles.endPurchase}>
                        Finalizar compra
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Checkout