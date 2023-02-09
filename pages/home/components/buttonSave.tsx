import React from 'react'

const ButtonSave = (props:any) => {
  return (
    <button onClick={(e)=>{props.onCLick(e)}} disabled={props.disabled?props.disabled:false} className='buttonSave'>{props.name}</button>
  )
}

export default ButtonSave