import { HiLink, HiOutlineTag } from "react-icons/hi";
import { ImStack } from "react-icons/im";
import {MdOutlineEditLocationAlt} from "react-icons/md"
import {FiTrash} from "react-icons/fi"
import {IoDocumentTextOutline} from "react-icons/io5"
import { useState } from "react";

const LeftSourceMenu = (props: any) => {
    const [active, setActive] = useState("Log")
  const example = ["Media Tags", "Log", "Delete", "Link", "Country", "Source"];
  const MENU = [
    {
      logo: <HiOutlineTag />,
      name: "Media Tags",
    },
    {
      logo: <ImStack />,
      name: "Source",
    },
    {
      logo: <HiLink />,
      name: "Link",
    },
    {
      logo: <MdOutlineEditLocationAlt />,
      name: "Country",
    },
    {
      logo: <FiTrash />,
      name: "Delete",
    },
    {
      logo: <IoDocumentTextOutline />,
      name: "Log",
    },
  ];

const handleMenu = (name:any) =>{
    setActive(name)
    props.output(name)
}

  return (
    <>
      <div className="titleMenu">{props.media}</div>
      {MENU.map((detail: any, index) => {
        if (example.indexOf(detail.name) > -1) {
            let actived;
            if (active == detail.name ) {
                actived = "sourceMenuActive"
            } 
          return (
            <div key={index}>
              <div className={`sourceMenu ${actived}`} onClick={()=>handleMenu(detail.name)}>
                <div className="row ">
                  <div className="col-1 logoSource">{detail.logo}</div>
                  <div className="col-10">{detail.name}</div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default LeftSourceMenu;
