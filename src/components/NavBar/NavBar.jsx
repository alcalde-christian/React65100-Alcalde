import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>
                Phone<i>Mart</i>
            </h1>
            <div>
                <button>Celulares</button>
                <button>Notebooks</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar