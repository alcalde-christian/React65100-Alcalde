import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://66e1f943c831c8811b56de6f.mockapi.io/api/products")
                const data = await response.json()

                if (!id) {
                    setItems(data)
                } else {
                    const filteredByCategory = data.filter(item => item.category === id) 
                    setItems(filteredByCategory) 
                }
            } catch (error) {
                console.error(error.message)
            }
        }
        
        fetchProducts()
    }, [id])

    return (
        <div>
            <h2 style={{textAlign: "center"}}>
                {greeting}
            </h2>
            <div className={styles.itemListContainer}>
                <ItemList items={items}/>  
            </div>
        </div>
    )
}

export default ItemListContainer