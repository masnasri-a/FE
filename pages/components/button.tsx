import styles from '../../styles/Style.module.scss'

const Button = (props:any) => {
    return(
        <>
        <button onClick={(e)=>props.onClick(e)}  className={styles.button}>
            {props.title}
        </button>
        </>
    )
}
export default Button;