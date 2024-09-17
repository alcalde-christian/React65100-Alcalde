import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Link className={styles.titleLink} to="/">
                <img className={styles.img} src="https://i.postimg.cc/PJYbM1Fm/logo-2.png"/>
                <h1 className={styles.title}>
                    Phone<i className={styles.italic}>Mart</i>
                </h1>
            </Link>
            <div className={styles.buttonsContainer}>
                <Link className={styles.button} to="/category/phones">Celulares</Link>
                <Link className={styles.button} to="/category/laptops">Laptops</Link>
                <Link className={styles.button} to="/category/accesories">Accesorios</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar