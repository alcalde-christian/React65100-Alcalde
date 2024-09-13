import { useEffect, useState } from "react"
import { getProducts } from "../../data/products"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts()
            .then (response => setItems(response))
    }, [])

    return (
        <div>
            <h2>
                {greeting}
            </h2>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer