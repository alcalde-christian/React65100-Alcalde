import ItemCount from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"

const ItemDetail = ({ item }) => {
    return(
        <>
            <img className={styles.img} src={item.img}/>
            <div className={styles.featuresContainer}>
                <p>
                    Producto: {item.name}
                </p>
                <p>
                    Pantalla: {item.screen}
                </p>
                <p>
                    Memoria RAM: {item.ram}
                </p>
                <p>
                    Almacenamiento: {item.storage}
                </p>
                <p>
                    Cámaras: {item.camera}
                </p>
                <p>
                    Precio: $ {item.price}
                </p>
                <ItemCount initial={1} stock={item.stock} item={item} />
            </div>
        </>
    )
}

export default ItemDetail