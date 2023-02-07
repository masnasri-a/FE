import React, { useEffect, useState } from "react";
import { FaTags, FaLink, FaMapMarkerAlt } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import { HiDocumentDuplicate } from "react-icons/hi";
import Router from "next/router";

const Menu = (props: any) => {
  const [menuActived, setMenuActived] = useState(0);
  const handleSourceName = (param: number) => {
    if (param == 0) {
      return "Online News";
    } else if (param == 1) {
      return "TV News";
    } else if (param == 2) {
      return "Printed News";
    } else if (param == 3) {
      return "Setting";
    }else{
      return "Profile"
    }
  };
  const [listMenu,setListMenu] = useState<any[]>([]);
  const handleSelectMenu = (param: number) => {
    setMenuActived(param);
    props.output(param);
  };

  const handleLogout = () => {
    Router.push("/auth/login");
    window.localStorage.clear();
  };

  const loops = () =>{
    const roles = window.localStorage.getItem("data");
    if (!roles) {
      Router.push("/auth/login");
    } else {
      let jsonData = JSON.parse(roles);
      const list_role: [] = jsonData.role_detail.access_role;
      list_role.map((detail: any) => {
        
        if (detail == "log") {
          setListMenu(oldData => [...oldData,{
            logo: <HiDocumentDuplicate />,
            title: "Log",
          }]);
        } else if (detail == "delete") {
          setListMenu(oldData => [...oldData,{
            logo: <AiTwotoneDelete />,
            title: "Delete",
          }]);
          
        } else if (detail == "country") {
          setListMenu(oldData => [...oldData,{
            logo: <FaMapMarkerAlt />,
            title: "Country",
          }]);
        } else if (detail == "link") {
          setListMenu(oldData => [...oldData,{
            logo: <FaLink />,
            title: "Link",
          }]);
        } else if (detail == "source") {
          setListMenu(oldData => [...oldData,{
            logo: <BsStack />,
            title: "Source",
          }]);
        } else if (detail == "media_tags") {
          setListMenu(oldData => [...oldData,{
            logo: <FaTags />,
            title: "Media Tag",
          }]);
        }
      });
    }
  }
  useEffect(() => {
    loops()
  }, []);
  return (
    <div className="menuSidebar">
      <div className="title">{handleSourceName(props.source)}</div>
      <div className="listMenuBar">
        {listMenu.map((detail: any, index) => {
          if (menuActived == index) {
            return (
              <div
                key={index}
                onClick={() => handleSelectMenu(index)}
                className="menuSelectedActive"
              >
                {detail.logo}
                {detail.title}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                onClick={() => handleSelectMenu(index)}
                className="menuSelected"
              >
                {detail.logo}
                {detail.title}
              </div>
            );
          }
        })}
      </div>
      <div
        className="logout"
        onClick={() => {
          handleLogout();
        }}
      >
        <div className="menus">
          <div className="signout">Sign Out</div>
          <div className="icons">
            <BiExit size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
