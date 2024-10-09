import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneProduct } from "../../firebase/db"
import ItemDetail from "../ItemDetail/ItemDetail"
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getOneProduct(id, setItem)
    }, [id])

    return(
        <div className={styles.itemDetailContainer}>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer