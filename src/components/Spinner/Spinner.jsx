import style from "./Spinner.module.css"

const Spinner = () => {
    return(
        <div className={style.spinner}>
            <div className={style.doubleBounce1}></div>
            <div className={style.doubleBounce2}></div>
        </div>
    )
}

export default Spinner