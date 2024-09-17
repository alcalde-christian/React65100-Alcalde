import { Link } from "react-router-dom"
import styles from "./Item.module.css"

const Item = ({ item }) => {
    return (
        <div className={styles.phoneCard}>
            <img className={styles.phoneImg} src={item.img}></img>
            <p>
                {item.name}
            </p>
            <p>
                $ {item.price}
            </p>
            <Link className={styles.button} to={`/product/${item.id}`}>
                + info
            </Link>
        </div>
    )
}

export default Item