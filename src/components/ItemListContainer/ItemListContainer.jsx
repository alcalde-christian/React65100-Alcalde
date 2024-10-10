import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../../firebase/db"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        id ? getProductsByCategory(id, setItems) : getProducts(setItems)
    }, [id])

    return (
        <>
            <div className={styles.itemListContainer}>
                <ItemList items={items}/>  
            </div>
        </>
    )
}

export default ItemListContainer