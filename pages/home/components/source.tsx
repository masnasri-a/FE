import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logoebdesk.svg";
import printer from "../../../public/printer.svg";
import setting from "../../../public/settings.svg";
import tv from "../../../public/tv.svg";
import rss from "../../../public/rss.svg";
const Source = (props:any) => {
  const [menuActive, setMenuActive] = useState(0);
  const listMenu = [
    {
      image: <Image src={rss} alt={"logo"} width={35} />,
    },
    {
      image: <Image src={tv} alt={"logo"} width={35} />,
    },
    {
      image: <Image src={printer} alt={"logo"} width={35} />,
    },
    {
      image: <Image src={setting} alt={"logo"} width={35} />,
    },
  ];
  const handleMenuActive = (param:number)=>{
    setMenuActive(param);
    props.output(param);
  }
  return (
    <div className="source">
      <div className="logo">
        <Image src={logo} alt={"logo"} width={50} />
      </div>
      <div className="listSource">
        {listMenu.map((detail: any, index) => {
          if (index == menuActive) {
            return (
              <div
                key={index}
                onClick={() => handleMenuActive(index)}
                className="selectMenuActive"
              >
                {detail.image}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                onClick={() => handleMenuActive(index)}
                className="selectMenu"
              >
                {detail.image}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Source;
