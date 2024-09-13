import styles from "./Item.module.css"

const Item = ({ item }) => {
    return (
        <>
            <div className={styles.phoneCard}>
                <p>
                    {item.name}
                </p>
                <p>
                    {item.price}
                </p>
            </div>
        </>
    )
}

export default Item