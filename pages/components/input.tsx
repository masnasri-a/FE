import { useEffect, useState } from 'react';
import Styles from '../../styles/Style.module.scss'

const Input = (props: any) => {
    const [type, setType] = useState("text")
    useEffect(() => {
        if (props.type == "password") {
            setType("password")
        }
    }, [props.type])
    return (
        <>
            <input onKeyPress={(e) => props.onKeyPress(e)} onChange={(e)=> props.onChange(e.target.value)} className={Styles.input} type={type}>
            </input>
        </>
    )
}
export default Input;