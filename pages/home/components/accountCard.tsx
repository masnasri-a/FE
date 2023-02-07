import Router from 'next/router';
import React from 'react'
import { CgProfile } from 'react-icons/cg';

const AccountCard = (props:any) => {
    const handleProfile = () =>{
        props.output(6)
    }
  return (
    <div className='accountCard' onClick={()=>{handleProfile()}}>
        <CgProfile size={25}/>
        <span>Profile</span>
    </div>
  )
}

export default AccountCard