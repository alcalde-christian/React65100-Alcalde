import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://66e1f943c831c8811b56de6f.mockapi.io/api/products/${id}`)
                const data = await response.json()
                setItem(data)
            } catch (error) {
                console.error(error.message)
            }
        }
        
        fetchProducts()
    }, [id])

    return(
        <div className={styles.itemDetailContainer}>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer