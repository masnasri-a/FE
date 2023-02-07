import Image from 'next/image'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import images from '../../../public/profile.png'
import InputMin from '../components/inputMin'
const Profile = (props:any) => {

  return (
    <div>
      <div className="mainProfile">
        <Image className='photoProfile' src={images} alt="Profile" width={220}/>
        <div className="formSetting">
          <div className="firstname">
            <div>First Name <BiEdit/></div>
            <InputMin />
          </div>
          <div className="lastname">
            <div>Last Name  <BiEdit/></div>
            <InputMin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile