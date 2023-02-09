import React, { useEffect, useState } from 'react'

const InputMin = (props:any) => {
  const [value, setValue] = useState("")
  const handleOnChange = (param:any)=>{
    props.output(param.target.value)
    console.log(param.target.value);
    setValue(param.target.value)
  }

  useEffect(()=>{
    props?
    setValue(props.value):
    setValue("")
  },[props])
  return (
    <input type="text" className='inputSetting min-input' autoComplete='none' value={value} onChange={(e)=>handleOnChange(e)}/>
  )
}

export default InputMin