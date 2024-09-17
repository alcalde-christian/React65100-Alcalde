import ItemCount from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"

const ItemDetail = ({ name, img, screen, ram, storage, camera, price }) => {
    return(
        <>
            <img className={styles.img} src={img}/>
            <div className={styles.featuresContainer}>
                <p>
                    Producto: {name}
                </p>
                <p>
                    Pantalla: {screen}
                </p>
                <p>
                    Memoria RAM: {ram}
                </p>
                <p>
                    Almacenamiento: {storage}
                </p>
                <p>
                    Cámaras: {camera}
                </p>
                <p>
                    Precio: $ {price}
                </p>
                <ItemCount initial={1} stock={10} onAdd={(qty) => console.log("Cantidad agregada ", qty)}/>
            </div>
        </>
    )
}

export default ItemDetail