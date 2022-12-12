import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileImage from "../../public/Images.png";
import LoginHandler from "../util/loginHandler";

const Header = (props: any) => {
  const [username, setUsername] = useState("")
  useEffect(()=>{
    setUsername(localStorage.getItem("name")!)
  },[])
  return (
    <>
      <LoginHandler />
      <div className="headerStyle">
        <div className="HeaderComponents">
          <div className="headerName">{props.source}</div>
          <div className="headerAccount">
            <div className="imagesHeader">
              <Image width={50} height={50} src={ProfileImage} alt="picture" />
              <span className="usernameHeader">{username}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
