import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart } = useCartContext()

    return(
        <>
            <h1>{cart.map(el => <p key={el.id}>{el.name}</p>)}</h1>
            <Link to="/checkout">Finalizar compra</Link>
        </>
    )
}

export default Cart