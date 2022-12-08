import { useEffect, useState } from 'react';
import Styles from '../../styles/Style.module.scss'
const Input = (props: any) => {
    const [type, setType] = useState("text")
    useEffect(() => {
        if (props.type == "password") {
            setType("password")
        }
    }, [])
    return (
        <>
            <input className={Styles.input} type={type}>
            </input>
        </>
    )
}
export default Input;