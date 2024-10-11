import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../../firebase/db"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.css"
import Spinner from "../Spinner/Spinner"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                await getProductsByCategory(id, setItems)
            } else {
                await getProducts(setItems)
            }
            setLoading(false)
        }

        fetchData()
    }, [id])

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <div className={styles.itemListContainer}>
                <ItemList items={items}/>  
            </div>
        </>
    )
}

export default ItemListContainer