import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneProduct } from "../../firebase/db"
import Spinner from "../Spinner/Spinner"
import ItemDetail from "../ItemDetail/ItemDetail"
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            await getOneProduct(id, setItem)
            setLoading(false)
        }
        
        fetchData()
    }, [id])

    if (loading) {
        return <Spinner />
    }

    return(
        <div className={styles.itemDetailContainer}>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer