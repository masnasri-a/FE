import React, { useEffect, useState } from "react";
import {
  BsArrowsAngleContract,
} from "react-icons/bs";
import Header from "./components/header";
import Menu from "./components/menu";
import Source from "./components/source";
import Log from "./page/log";
import MediaTags from "./page/mediatags";
import Profile from "./page/profile";
const Index = () => {
  const [menu, setMenu] = useState(0);
  const [show, setShow] = useState(true);
  const [loadMenu, setLoadMenu] = useState(<Profile/>)
  const handleSource = (param: any) => {
    setMenu(param);
    setShow(true)
  };
  const handleOutput = (param: any) => {
    console.log(param);
    setMenu(param);
  };
  const load = () =>{
    if (menu == 0){
      setLoadMenu(<Log/>)
    }
    else if(menu == 1){
      setLoadMenu(<MediaTags/>)
    }
    else if (menu == 6){
      setLoadMenu(<Profile/>)
      console.log("profile");
    }
  }
  useEffect(()=>{
    load()
  },[menu])
  return (
    <div>
      <div className="mainHome">
        <Source output={handleSource} />
        {show ? (
          <>
            <Menu source={menu} output={handleOutput} />
            <div className="minimize" onClick={() => setShow(false)}>
              <BsArrowsAngleContract size={20} />
            </div>
          </>
        ) : null}
        <div className="menu">
          {show ? (
            <div className="w-normal">
              <Header output={handleOutput} />
              {
                loadMenu
              }
            </div>
          ) : (
            <div className="w-full">
              <Header output={handleOutput} />
              {
                loadMenu
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
