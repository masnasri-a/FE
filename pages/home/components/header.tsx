import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import images from "../../../public/Images.png";
import AccountCard from "./accountCard";
const Header = (props: any) => {
  const [openCard, setOpenCard] = useState(false);
  const [username, setUsername] = useState("username")
  const handleOutput = (param: any) => {
    props.output(param);
    setOpenCard(!openCard)
  };
  const load = () =>{
    const localStorage = window.localStorage.getItem('data')
    localStorage?
      setUsername(JSON.parse(localStorage).username)
    :Router.push('/auth/login')
    
  }
  useEffect(()=>{
    load()
  },[])
  return (
    <>
    <div className="headerMenu">
      {openCard ? <AccountCard output={handleOutput} /> : null}
      <div className="">Log</div>
      <div className="accounts">
        <Image src={images} width={40} height={40} alt={"profiles"} />
        <span onClick={()=> setOpenCard(!openCard)}>{username}</span>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Header;
