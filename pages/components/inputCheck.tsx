import { useState } from "react";

const InputCheck = (props: any) => {
    const [msg, setMsg] = useState("")
    const handleResult = () => {

    }
    return (
        <>
            <div className="checker">
                <input type="text" className="inputCheck" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder={props.placeholder} />
                <button className="buttonCheck" disabled={msg ? false : true}>{props.title}</button>
            </div>
        </>
    )
}

export default InputCheck;