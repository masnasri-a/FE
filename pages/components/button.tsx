import styles from '../../styles/Style.module.scss'

const Button = (props:any) => {
    return(
        <>
        <button className={styles.button}>
            {props.title}
        </button>
        </>
    )
}
export default Button;