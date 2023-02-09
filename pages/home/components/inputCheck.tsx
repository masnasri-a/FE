import React, { useState } from 'react'

const InputCheck = (props:any) => {
    const [value, setValue] = useState("")
    const handleValue = (param:any) =>{
        console.log(param);
        setValue(param)
        props.output(param)
    }
  return (
    <input type="text" value={value} className={"inputCheck"} onChange={(e)=>{handleValue(e.target.value)}}/>
  )
}

export default InputCheck