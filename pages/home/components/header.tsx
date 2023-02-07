import Image from "next/image";
import React, { useState } from "react";
import images from "../../../public/Images.png";
import AccountCard from "./accountCard";
const Header = (props: any) => {
  const [openCard, setOpenCard] = useState(false);
  const handleOutput = (param: any) => {
    props.output(param);
    setOpenCard(!openCard)
  };
  return (
    <>
    <div className="headerMenu">
      {openCard ? <AccountCard output={handleOutput} /> : null}
      <div className="">Log</div>
      <div className="accounts">
        <Image src={images} width={40} height={40} alt={"profiles"} />
        <span onClick={()=> setOpenCard(!openCard)}>Username</span>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Header;
